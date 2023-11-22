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
import { DiaryEntryAssignmentView } from './diaryEntryAssignmentView';
import { DiaryEntryTypeResponse } from './diaryEntryTypeResponse';

export class DiaryEntryAssignmentResponse {
    /**
    * Diary Entry Assignment Id
    */
    'diaryEntryAssignmentId': string;
    /**
    * Organization Id
    */
    'orgId': string;
    /**
    * Site Id
    */
    'siteId': string;
    /**
    * The role ID.
    */
    'roleId': string;
    'diaryEntryType': DiaryEntryTypeResponse;
    'diaryEntryAssignmentView': DiaryEntryAssignmentView;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "diaryEntryAssignmentId",
            "baseName": "diaryEntryAssignmentId",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string"
        },
        {
            "name": "diaryEntryType",
            "baseName": "diaryEntryType",
            "type": "DiaryEntryTypeResponse"
        },
        {
            "name": "diaryEntryAssignmentView",
            "baseName": "diaryEntryAssignmentView",
            "type": "DiaryEntryAssignmentView"
        }    ];

    static getAttributeTypeMap() {
        return DiaryEntryAssignmentResponse.attributeTypeMap;
    }
}

