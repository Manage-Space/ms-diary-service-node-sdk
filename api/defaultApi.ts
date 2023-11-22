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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BadRequestError400Response } from '../model/badRequestError400Response';
import { CreateDiaryEntryAssignment200Response } from '../model/createDiaryEntryAssignment200Response';
import { CreateDiaryEntryAssignmentRequest } from '../model/createDiaryEntryAssignmentRequest';
import { CreateDiaryEntryRequest } from '../model/createDiaryEntryRequest';
import { CreateReminder200Response } from '../model/createReminder200Response';
import { ForbiddenError403Response } from '../model/forbiddenError403Response';
import { GetDiaryEntries200Response } from '../model/getDiaryEntries200Response';
import { InternalServerError500Response } from '../model/internalServerError500Response';
import { UnauthorizedError401Response } from '../model/unauthorizedError401Response';
import { UpdateDiaryEntryRequest } from '../model/updateDiaryEntryRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.dev.manage-space.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DefaultApiApiKeys {
}

export class DefaultApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'bearer': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: DefaultApiApiKeys, value: string) {
        (this.authentications as any)[DefaultApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearer.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Create a diary entry.
     * @summary Create diary entry.
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param createDiaryEntryRequest 
     */
    public async createDiaryEntry (orgId: string, siteId: string, createDiaryEntryRequest: CreateDiaryEntryRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }> {
        const localVarPath = this.basePath + '/diary/orgs/{orgId}/sites/{siteId}/diary-entries'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling createDiaryEntry.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling createDiaryEntry.');
        }

        // verify required parameter 'createDiaryEntryRequest' is not null or undefined
        if (createDiaryEntryRequest === null || createDiaryEntryRequest === undefined) {
            throw new Error('Required parameter createDiaryEntryRequest was null or undefined when calling createDiaryEntry.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createDiaryEntryRequest, "CreateDiaryEntryRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetDiaryEntries200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create a diary entry assignment.
     * @summary Create diary entry assignemnt.
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param createDiaryEntryAssignmentRequest 
     */
    public async createDiaryEntryAssignment (orgId: string, siteId: string, createDiaryEntryAssignmentRequest: CreateDiaryEntryAssignmentRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateDiaryEntryAssignment200Response;  }> {
        const localVarPath = this.basePath + '/diary/orgs/{orgId}/sites/{siteId}/diary-entry-assignments'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling createDiaryEntryAssignment.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling createDiaryEntryAssignment.');
        }

        // verify required parameter 'createDiaryEntryAssignmentRequest' is not null or undefined
        if (createDiaryEntryAssignmentRequest === null || createDiaryEntryAssignmentRequest === undefined) {
            throw new Error('Required parameter createDiaryEntryAssignmentRequest was null or undefined when calling createDiaryEntryAssignment.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createDiaryEntryAssignmentRequest, "CreateDiaryEntryAssignmentRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateDiaryEntryAssignment200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateDiaryEntryAssignment200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create a diary entry reminder.
     * @summary Create a diary entry reminder.
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param diaryEntryId The Diary Entry ID
     */
    public async createReminder (orgId: string, siteId: string, diaryEntryId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateReminder200Response;  }> {
        const localVarPath = this.basePath + '/diary/orgs/{orgId}/sites/{siteId}/diary-entries/{diaryEntryId}/reminders'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)))
            .replace('{' + 'diaryEntryId' + '}', encodeURIComponent(String(diaryEntryId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling createReminder.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling createReminder.');
        }

        // verify required parameter 'diaryEntryId' is not null or undefined
        if (diaryEntryId === null || diaryEntryId === undefined) {
            throw new Error('Required parameter diaryEntryId was null or undefined when calling createReminder.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateReminder200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateReminder200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get diary entries
     * @summary Get diary entries
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param offset The offset of the first record to return (0-indexed).
     * @param limit The maximum number of records to return per page.
     */
    public async getDiaryEntries (orgId: string, siteId: string, offset?: number, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }> {
        const localVarPath = this.basePath + '/diary/orgs/{orgId}/sites/{siteId}/diary-entries'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getDiaryEntries.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling getDiaryEntries.');
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetDiaryEntries200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get a diary entry
     * @summary Get diary entry
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param diaryEntryId The Diary Entry ID
     */
    public async getDiaryEntry (orgId: string, siteId: string, diaryEntryId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }> {
        const localVarPath = this.basePath + '/diary/orgs/{orgId}/sites/{siteId}/diary-entries/{diaryEntryId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)))
            .replace('{' + 'diaryEntryId' + '}', encodeURIComponent(String(diaryEntryId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getDiaryEntry.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling getDiaryEntry.');
        }

        // verify required parameter 'diaryEntryId' is not null or undefined
        if (diaryEntryId === null || diaryEntryId === undefined) {
            throw new Error('Required parameter diaryEntryId was null or undefined when calling getDiaryEntry.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetDiaryEntries200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get a diary entry assignment.
     * @summary Get diary entry assignment
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param diaryEntryAssignmentId The Diary Entry Assignment ID
     */
    public async getDiaryEntryAssignment (orgId: string, siteId: string, diaryEntryAssignmentId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateDiaryEntryAssignment200Response;  }> {
        const localVarPath = this.basePath + '/diary/orgs/{orgId}/sites/{siteId}/diary-entry-assignments/{diaryEntryAssignmentId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)))
            .replace('{' + 'diaryEntryAssignmentId' + '}', encodeURIComponent(String(diaryEntryAssignmentId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getDiaryEntryAssignment.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling getDiaryEntryAssignment.');
        }

        // verify required parameter 'diaryEntryAssignmentId' is not null or undefined
        if (diaryEntryAssignmentId === null || diaryEntryAssignmentId === undefined) {
            throw new Error('Required parameter diaryEntryAssignmentId was null or undefined when calling getDiaryEntryAssignment.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateDiaryEntryAssignment200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateDiaryEntryAssignment200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get diary entries by view
     * @summary Get diary entries by view
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param viewCodeName The code name of the view requested
     * @param offset The offset of the first record to return (0-indexed).
     * @param limit The maximum number of records to return per page.
     * @param dateFrom 
     * @param dateTo 
     */
    public async getDiaryEntryBySiteIdAndView (orgId: string, siteId: string, viewCodeName: string, offset?: number, limit?: number, dateFrom?: Date, dateTo?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }> {
        const localVarPath = this.basePath + '/diary/orgs/{orgId}/sites/{siteId}/diary-entries/views/{viewCodeName}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)))
            .replace('{' + 'viewCodeName' + '}', encodeURIComponent(String(viewCodeName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getDiaryEntryBySiteIdAndView.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling getDiaryEntryBySiteIdAndView.');
        }

        // verify required parameter 'viewCodeName' is not null or undefined
        if (viewCodeName === null || viewCodeName === undefined) {
            throw new Error('Required parameter viewCodeName was null or undefined when calling getDiaryEntryBySiteIdAndView.');
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (dateFrom !== undefined) {
            localVarQueryParameters['dateFrom'] = ObjectSerializer.serialize(dateFrom, "Date");
        }

        if (dateTo !== undefined) {
            localVarQueryParameters['dateTo'] = ObjectSerializer.serialize(dateTo, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetDiaryEntries200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update diary entry.
     * @summary Update diary entry.
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param diaryEntryId The Diary Entry ID
     * @param updateDiaryEntryRequest 
     */
    public async updateDiaryEntry (orgId: string, siteId: string, diaryEntryId: string, updateDiaryEntryRequest: UpdateDiaryEntryRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }> {
        const localVarPath = this.basePath + '/diary/orgs/{orgId}/sites/{siteId}/diary-entries/{diaryEntryId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)))
            .replace('{' + 'diaryEntryId' + '}', encodeURIComponent(String(diaryEntryId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling updateDiaryEntry.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling updateDiaryEntry.');
        }

        // verify required parameter 'diaryEntryId' is not null or undefined
        if (diaryEntryId === null || diaryEntryId === undefined) {
            throw new Error('Required parameter diaryEntryId was null or undefined when calling updateDiaryEntry.');
        }

        // verify required parameter 'updateDiaryEntryRequest' is not null or undefined
        if (updateDiaryEntryRequest === null || updateDiaryEntryRequest === undefined) {
            throw new Error('Required parameter updateDiaryEntryRequest was null or undefined when calling updateDiaryEntry.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateDiaryEntryRequest, "UpdateDiaryEntryRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetDiaryEntries200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetDiaryEntries200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
