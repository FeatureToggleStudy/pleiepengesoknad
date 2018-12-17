import * as React from 'react';
import Step from '../../step/Step';
import { StepID } from '../../../config/stepConfig';
import { navigateTo } from '../../../utils/navigationHelper';
import { HistoryProps } from '../../../types/History';
import { getNextStepRoute } from '../../../utils/stepConfigHelper';

export interface RelasjonTilBarnStepProps {}

type Props = RelasjonTilBarnStepProps & HistoryProps;

const nextStepRoute = getNextStepRoute(StepID.RELASJON_TIL_BARN);
const RelasjonTilBarnStep: React.FunctionComponent<Props> = ({ history }) => (
    <Step
        id={StepID.RELASJON_TIL_BARN}
        onButtonClick={() => {
            navigateTo(nextStepRoute!, history);
        }}>
        Relasjon til barn-steg
    </Step>
);

export default RelasjonTilBarnStep;
