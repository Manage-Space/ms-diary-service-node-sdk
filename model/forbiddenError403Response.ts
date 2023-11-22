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
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';

export class ForbiddenError403Response {
    'data': Array<string>;
    'success': boolean;
    'error': ForbiddenError403ResponseError;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<string>"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "ForbiddenError403ResponseError"
        }    ];

    static getAttributeTypeMap() {
        return ForbiddenError403Response.attributeTypeMap;
    }
}

