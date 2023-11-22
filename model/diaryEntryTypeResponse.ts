/**
 * ManageSpace Diary API
 * ManageSpace Diary API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DiaryEntryTypeCategory } from './diaryEntryTypeCategory';
import { DiaryEntryTypeCodeNames } from './diaryEntryTypeCodeNames';

export class DiaryEntryTypeResponse {
    /**
    * Diary Entry Type Id
    */
    'diaryEntryTypeId': number;
    'codeName': DiaryEntryTypeCodeNames;
    /**
    * Display Name
    */
    'displayName': string;
    'diaryEntryTypeCategory': DiaryEntryTypeCategory;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "diaryEntryTypeId",
            "baseName": "diaryEntryTypeId",
            "type": "number"
        },
        {
            "name": "codeName",
            "baseName": "codeName",
            "type": "DiaryEntryTypeCodeNames"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "diaryEntryTypeCategory",
            "baseName": "diaryEntryTypeCategory",
            "type": "DiaryEntryTypeCategory"
        }    ];

    static getAttributeTypeMap() {
        return DiaryEntryTypeResponse.attributeTypeMap;
    }
}

export namespace DiaryEntryTypeResponse {
}