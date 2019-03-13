import * as React from 'react';
import { RadioPanel, RadioPanelProps, SkjemaGruppe } from 'nav-frontend-skjema';
import { SkjemaelementFeil } from 'nav-frontend-skjema/lib/skjemaelement-feilmelding';
import InformationPanel from '../information-panel/InformationPanel';
import InformationIconButton from '../information-icon-button/InformationIconButton';
import 'nav-frontend-skjema-style';
import './radioPanelGroup.less';

type RadioPanelBaseProps = RadioPanelProps & { key?: string };

interface RadioPanelGroupBaseProps {
    legend: string;
    radios: RadioPanelBaseProps[];
    feil?: SkjemaelementFeil;
    helperText?: string;
}

const RadioPanelGroupBase = ({ legend, radios, feil, helperText }: RadioPanelGroupBaseProps) => {
    const [showHelperText, setShowHelperText] = React.useState(false);
    return (
        <SkjemaGruppe feil={feil}>
            <div className="radioPanelGruppe skjemaelement">
                <fieldset className="skjema__fieldset">
                    <legend className="skjema__legend">
                        {legend}
                        {helperText && (
                            <>
                                <InformationIconButton onClick={() => setShowHelperText(!showHelperText)} />
                                {showHelperText && <InformationPanel>{helperText}</InformationPanel>}
                            </>
                        )}
                    </legend>
                    <div className="radioPanelGroup--responsive">
                        {radios.map(({ onChange, value, key, ...otherRadioProps }: RadioPanelBaseProps) => (
                            <div className="radioPanelWrapper" key={key}>
                                <RadioPanel onChange={onChange} value={value} {...otherRadioProps} />
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
        </SkjemaGruppe>
    );
};

export default RadioPanelGroupBase;
