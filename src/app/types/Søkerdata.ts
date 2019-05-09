export interface Barn {
    fornavn: string;
    etternavn: string;
    mellomnavn: string;
    relasjon: string;
    fodselsnummer: string;
    fodselsdato: string;
}

export interface Ansettelsesforhold {
    navn: string;
    organisasjonsnummer: string;
}

export interface Person {
    etternavn: string;
    fornavn: string;
    mellomnavn: string;
    kjonn: string;
    fodselsnummer: string;
    myndig: boolean;
}

export interface Søkerdata {
    person: Person;
    barn: Barn[];
    setAnsettelsesforhold: (ansettelsesforhold: Ansettelsesforhold[]) => void;
    ansettelsesforhold?: Ansettelsesforhold[];
}
