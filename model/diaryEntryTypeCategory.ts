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
import { DiaryEntryTypeCategoryCodeNames } from './diaryEntryTypeCategoryCodeNames';

export class DiaryEntryTypeCategory {
    /**
    * Diary Entry Type Category Id
    */
    'diaryEntryTypeCategoryId': number;
    'codeName': DiaryEntryTypeCategoryCodeNames;
    /**
    * Display Name
    */
    'displayName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "diaryEntryTypeCategoryId",
            "baseName": "diaryEntryTypeCategoryId",
            "type": "number"
        },
        {
            "name": "codeName",
            "baseName": "codeName",
            "type": "DiaryEntryTypeCategoryCodeNames"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DiaryEntryTypeCategory.attributeTypeMap;
    }
}

export namespace DiaryEntryTypeCategory {
}
