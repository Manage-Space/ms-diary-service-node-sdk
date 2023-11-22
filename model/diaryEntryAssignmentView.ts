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
import { DiaryEntryAssignmentViewCodeNames } from './diaryEntryAssignmentViewCodeNames';

export class DiaryEntryAssignmentView {
    /**
    * Diary Entry Assignment View Id.
    */
    'diaryEntryAssignmentViewId': number;
    'codeName': DiaryEntryAssignmentViewCodeNames;
    /**
    * Display name of the diary entry assignment view.
    */
    'displayName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "diaryEntryAssignmentViewId",
            "baseName": "diaryEntryAssignmentViewId",
            "type": "number"
        },
        {
            "name": "codeName",
            "baseName": "codeName",
            "type": "DiaryEntryAssignmentViewCodeNames"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DiaryEntryAssignmentView.attributeTypeMap;
    }
}

export namespace DiaryEntryAssignmentView {
}