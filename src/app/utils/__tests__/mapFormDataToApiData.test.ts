import { Field, PleiepengesøknadFormData } from '../../types/PleiepengesøknadFormData';
import { mapFormDataToApiData } from '../mapFormDataToApiData';
import { PleiepengesøknadApiData } from '../../types/PleiepengesøknadApiData';
import * as dateUtils from './../dateUtils';
import * as attachmentUtils from './../attachmentUtils';
import { YesOrNo } from '../../types/YesOrNo';
const moment = require('moment');

const todaysDate = moment()
    .startOf('day')
    .toDate();

type AttachmentMock = Attachment & { failed: boolean };
const attachmentMock1: Partial<AttachmentMock> = { url: 'nav.no/1', failed: true };
const attachmentMock2: Partial<AttachmentMock> = { url: 'nav.no/2', failed: false };

const formDataMock: Partial<PleiepengesøknadFormData> = {
    [Field.barnetsNavn]: 'Ola Foobar',
    [Field.harBekreftetOpplysninger]: true,
    [Field.harGodkjentVilkår]: true,
    [Field.søkersRelasjonTilBarnet]: 'mor',
    [Field.ansettelsesforhold]: [
        {
            navn: 'Telenor',
            organisasjonsnummer: '973861778'
        },
        {
            navn: 'Maxbo',
            organisasjonsnummer: '910831143'
        }
    ],
    [Field.harBoddUtenforNorgeSiste12Mnd]: YesOrNo.YES,
    [Field.skalBoUtenforNorgeNeste12Mnd]: YesOrNo.NO,
    [Field.periodeFra]: todaysDate,
    [Field.periodeTil]: moment(todaysDate)
        .add(1, 'day')
        .toDate(),
    [Field.legeerklæring]: [attachmentMock1 as AttachmentMock, attachmentMock2 as AttachmentMock]
};

jest.mock('../dateUtils', () => {
    return {
        formatDate: jest.fn((date: Date) => date.toDateString())
    };
});

jest.mock('../attachmentUtils', () => {
    return {
        attachmentUploadHasFailed: jest.fn((attachment: AttachmentMock) => attachment.failed)
    };
});

describe('mapFormDataToApiData', () => {
    let resultingApiData: PleiepengesøknadApiData;

    beforeAll(() => {
        resultingApiData = mapFormDataToApiData(formDataMock as PleiepengesøknadFormData);
    });

    it("should set 'barnetsNavn' in api data correctly", () => {
        expect(resultingApiData.barn.navn).toEqual(formDataMock[Field.barnetsNavn]);
    });

    it("should set 'relasjon_til_barnet' in api data correctly", () => {
        expect(resultingApiData.relasjon_til_barnet).toEqual(formDataMock[Field.søkersRelasjonTilBarnet]);
    });

    it("should set 'arbeidsgivere.organisasjoner' in api data correctly", () => {
        expect(resultingApiData.arbeidsgivere.organisasjoner).toEqual(formDataMock[Field.ansettelsesforhold]);
    });

    it("should set 'medlemskap.skal_bo_i_utlandet_neste_12_mnd' in api data correctly", () => {
        expect(resultingApiData.medlemskap.skal_bo_i_utlandet_neste_12_mnd).toBe(false);
    });

    it("should set 'medlemskap.har_bodd_i_utlandet_siste_12_mnd' in api data correctly", () => {
        expect(resultingApiData.medlemskap.har_bodd_i_utlandet_siste_12_mnd).toBe(true);
    });

    it("should set 'fra_og_med' in api data correctly", () => {
        expect(dateUtils.formatDate).toHaveBeenCalledWith(formDataMock[Field.periodeFra]);
        expect(resultingApiData.fra_og_med).toEqual(dateUtils.formatDate(formDataMock[Field.periodeFra]!));
    });

    it("should set 'til_og_med' in api data correctly", () => {
        expect(dateUtils.formatDate).toHaveBeenCalledWith(formDataMock[Field.periodeTil]);
        expect(resultingApiData.til_og_med).toEqual(dateUtils.formatDate(formDataMock[Field.periodeTil]!));
    });

    it("should set 'vedlegg' in api data correctly by only including the urls of attachments that have been successfully uploaded", () => {
        expect(attachmentUtils.attachmentUploadHasFailed).toHaveBeenCalledWith(attachmentMock1);
        expect(attachmentUtils.attachmentUploadHasFailed).toHaveBeenCalledWith(attachmentMock2);
        expect(resultingApiData.vedlegg).toHaveLength(1);
        expect(resultingApiData.vedlegg[0]).toEqual(attachmentMock2.url);
    });

    it("should set 'fodselsnummer' in api data to undefined if it doesnt exist, and otherwise it should assign value to 'fodselsnummer' in api data", () => {
        const fnr = '12345123456';
        expect(resultingApiData.barn.fodselsnummer).toBeUndefined();
        const formDataWithFnr: Partial<PleiepengesøknadFormData> = {
            ...formDataMock,
            [Field.barnetsFødselsnummer]: fnr
        };
        const result = mapFormDataToApiData(formDataWithFnr as PleiepengesøknadFormData);
        expect(result.barn.fodselsnummer).toEqual(fnr);
    });

    it("should set 'alternativ_id' in api data to undefined if it doesnt exist, and otherwise it should assign value to 'alternativ_id' in api data", () => {
        const fnr = '12345123456';
        expect(resultingApiData.barn.alternativ_id).toBeUndefined();
        const formDataWithFnr: Partial<PleiepengesøknadFormData> = {
            ...formDataMock,
            [Field.barnetsForeløpigeFødselsnummerEllerDNummer]: fnr
        };
        const result = mapFormDataToApiData(formDataWithFnr as PleiepengesøknadFormData);
        expect(result.barn.alternativ_id).toEqual(fnr);
    });

    it("should assign fnr to 'fodselsnummer' in api data, and set 'alternativ_id' to undefined, if both barnetsFødselsnummer and barnetsForeløpigeFødselsnummerEllerDNummer has values", () => {
        const fnr = '12345123456';
        expect(resultingApiData.barn.alternativ_id).toBeUndefined();
        const formDataWithFnr: Partial<PleiepengesøknadFormData> = {
            ...formDataMock,
            [Field.barnetsFødselsnummer]: fnr,
            [Field.barnetsForeløpigeFødselsnummerEllerDNummer]: fnr
        };
        const result = mapFormDataToApiData(formDataWithFnr as PleiepengesøknadFormData);
        expect(result.barn.alternativ_id).toBeUndefined();
        expect(result.barn.fodselsnummer).toEqual(fnr);
    });
});
