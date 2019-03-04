import * as React from 'react';
import { History } from 'history';
import Step, { StepProps } from '../step/Step';
import { userHasSubmittedValidForm } from '../../utils/formikUtils';
import { connect } from 'formik';
import { ConnectedFormikProps } from '../../types/ConnectedFormikProps';
import { Field } from '../../types/PleiepengesøknadFormData';

export interface FormikStepProps {
    onValidFormSubmit?: () => void;
    history: History;
}

type Props = FormikStepProps & StepProps;
type PropsWithFormik = Props & ConnectedFormikProps<Field>;

class FormikStep extends React.Component<PropsWithFormik> {
    constructor(props: PropsWithFormik) {
        super(props);

        const {
            history,
            formik: { setFormikState }
        } = props;
        history.listen(() => {
            setFormikState({ submitCount: 0 });
        });
    }

    componentDidUpdate(previousProps: PropsWithFormik) {
        const previousValues = {
            isSubmitting: previousProps.formik.isSubmitting,
            isValid: previousProps.formik.isValid
        };
        const currentValues = { isSubmitting: this.props.formik.isSubmitting, isValid: this.props.formik.isValid };

        if (userHasSubmittedValidForm(previousValues, currentValues)) {
            const { onValidFormSubmit } = this.props;
            if (onValidFormSubmit) {
                onValidFormSubmit();
            }
        }
    }

    render() {
        return <Step {...this.props} />;
    }
}

export default connect<Props, Field>(FormikStep);
