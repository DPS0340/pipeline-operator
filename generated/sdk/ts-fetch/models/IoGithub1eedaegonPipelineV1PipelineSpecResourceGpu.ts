/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu
 */
export interface IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu {
    /**
     * 
     * @type {number}
     * @memberof IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu
     */
    type?: string;
}

/**
 * Check if a given object implements the IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu interface.
 */
export function instanceOfIoGithub1eedaegonPipelineV1PipelineSpecResourceGpu(value: object): value is IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu {
    return true;
}

export function IoGithub1eedaegonPipelineV1PipelineSpecResourceGpuFromJSON(json: any): IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu {
    return IoGithub1eedaegonPipelineV1PipelineSpecResourceGpuFromJSONTyped(json, false);
}

export function IoGithub1eedaegonPipelineV1PipelineSpecResourceGpuFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function IoGithub1eedaegonPipelineV1PipelineSpecResourceGpuToJSON(value?: IoGithub1eedaegonPipelineV1PipelineSpecResourceGpu | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'type': value['type'],
    };
}
