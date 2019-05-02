export interface Barn {
    navn: string | null;
    fodselsnummer: string | null;
    alternativ_id: string | null;
}

interface Ansettelsesforhold {
    navn: string;
}

interface Medlemskap {
    har_bodd_i_utlandet_siste_12_mnd: boolean;
    skal_bo_i_utlandet_neste_12_mnd: boolean;
}

export interface PleiepengesøknadApiData {
    barn: Barn;
    relasjon_til_barnet: string;
    fra_og_med: Date;
    til_og_med: Date;
    arbeidsgivere: { organisasjoner: Ansettelsesforhold[] };
    vedlegg: string[];
    medlemskap: Medlemskap;
    har_medsoker: boolean;
    grad: number;
}
