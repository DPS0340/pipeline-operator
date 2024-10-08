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
import type { IoGithub1eedaegonPipelineV1PipelineSpecVolumesInner } from './IoGithub1eedaegonPipelineV1PipelineSpecVolumesInner';
import {
    IoGithub1eedaegonPipelineV1PipelineSpecVolumesInnerFromJSON,
    IoGithub1eedaegonPipelineV1PipelineSpecVolumesInnerFromJSONTyped,
    IoGithub1eedaegonPipelineV1PipelineSpecVolumesInnerToJSON,
} from './IoGithub1eedaegonPipelineV1PipelineSpecVolumesInner';
import type { IoGithub1eedaegonPipelineV1RunSpecJobsInner } from './IoGithub1eedaegonPipelineV1RunSpecJobsInner';
import {
    IoGithub1eedaegonPipelineV1RunSpecJobsInnerFromJSON,
    IoGithub1eedaegonPipelineV1RunSpecJobsInnerFromJSONTyped,
    IoGithub1eedaegonPipelineV1RunSpecJobsInnerToJSON,
} from './IoGithub1eedaegonPipelineV1RunSpecJobsInner';
import type { IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimit } from './IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimit';
import {
    IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimitFromJSON,
    IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimitFromJSONTyped,
    IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimitToJSON,
} from './IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimit';
import type { IoGithub1eedaegonPipelineV1PipelineSpecSchedule } from './IoGithub1eedaegonPipelineV1PipelineSpecSchedule';
import {
    IoGithub1eedaegonPipelineV1PipelineSpecScheduleFromJSON,
    IoGithub1eedaegonPipelineV1PipelineSpecScheduleFromJSONTyped,
    IoGithub1eedaegonPipelineV1PipelineSpecScheduleToJSON,
} from './IoGithub1eedaegonPipelineV1PipelineSpecSchedule';
import type { IoGithub1eedaegonPipelineV1PipelineSpecResource } from './IoGithub1eedaegonPipelineV1PipelineSpecResource';
import {
    IoGithub1eedaegonPipelineV1PipelineSpecResourceFromJSON,
    IoGithub1eedaegonPipelineV1PipelineSpecResourceFromJSONTyped,
    IoGithub1eedaegonPipelineV1PipelineSpecResourceToJSON,
} from './IoGithub1eedaegonPipelineV1PipelineSpecResource';

/**
 * 
 * @export
 * @interface IoGithub1eedaegonPipelineV1RunSpec
 */
export interface IoGithub1eedaegonPipelineV1RunSpec {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    env?: { [key: string]: string; };
    /**
     * 
     * @type {IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimit}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    historyLimit?: IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimit;
    /**
     * 
     * @type {Array<string>}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    inputs?: Array<string>;
    /**
     * 
     * @type {Array<IoGithub1eedaegonPipelineV1RunSpecJobsInner>}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    jobs?: Array<IoGithub1eedaegonPipelineV1RunSpecJobsInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    outputs?: Array<string>;
    /**
     * 
     * @type {IoGithub1eedaegonPipelineV1PipelineSpecResource}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    resource?: IoGithub1eedaegonPipelineV1PipelineSpecResource;
    /**
     * 
     * @type {Array<string>}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    runBefore?: Array<string>;
    /**
     * 
     * @type {IoGithub1eedaegonPipelineV1PipelineSpecSchedule}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    schedule?: IoGithub1eedaegonPipelineV1PipelineSpecSchedule;
    /**
     * 
     * @type {string}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    trigger?: string;
    /**
     * 
     * @type {Array<IoGithub1eedaegonPipelineV1PipelineSpecVolumesInner>}
     * @memberof IoGithub1eedaegonPipelineV1RunSpec
     */
    volumes?: Array<IoGithub1eedaegonPipelineV1PipelineSpecVolumesInner>;
}

/**
 * Check if a given object implements the IoGithub1eedaegonPipelineV1RunSpec interface.
 */
export function instanceOfIoGithub1eedaegonPipelineV1RunSpec(value: object): value is IoGithub1eedaegonPipelineV1RunSpec {
    return true;
}

export function IoGithub1eedaegonPipelineV1RunSpecFromJSON(json: any): IoGithub1eedaegonPipelineV1RunSpec {
    return IoGithub1eedaegonPipelineV1RunSpecFromJSONTyped(json, false);
}

export function IoGithub1eedaegonPipelineV1RunSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoGithub1eedaegonPipelineV1RunSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'env': json['env'] == null ? undefined : json['env'],
        'historyLimit': json['historyLimit'] == null ? undefined : IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimitFromJSON(json['historyLimit']),
        'inputs': json['inputs'] == null ? undefined : json['inputs'],
        'jobs': json['jobs'] == null ? undefined : ((json['jobs'] as Array<any>).map(IoGithub1eedaegonPipelineV1RunSpecJobsInnerFromJSON)),
        'outputs': json['outputs'] == null ? undefined : json['outputs'],
        'resource': json['resource'] == null ? undefined : IoGithub1eedaegonPipelineV1PipelineSpecResourceFromJSON(json['resource']),
        'runBefore': json['runBefore'] == null ? undefined : json['runBefore'],
        'schedule': json['schedule'] == null ? undefined : IoGithub1eedaegonPipelineV1PipelineSpecScheduleFromJSON(json['schedule']),
        'trigger': json['trigger'] == null ? undefined : json['trigger'],
        'volumes': json['volumes'] == null ? undefined : ((json['volumes'] as Array<any>).map(IoGithub1eedaegonPipelineV1PipelineSpecVolumesInnerFromJSON)),
    };
}

export function IoGithub1eedaegonPipelineV1RunSpecToJSON(value?: IoGithub1eedaegonPipelineV1RunSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'env': value['env'],
        'historyLimit': IoGithub1eedaegonPipelineV1PipelineSpecHistoryLimitToJSON(value['historyLimit']),
        'inputs': value['inputs'],
        'jobs': value['jobs'] == null ? undefined : ((value['jobs'] as Array<any>).map(IoGithub1eedaegonPipelineV1RunSpecJobsInnerToJSON)),
        'outputs': value['outputs'],
        'resource': IoGithub1eedaegonPipelineV1PipelineSpecResourceToJSON(value['resource']),
        'runBefore': value['runBefore'],
        'schedule': IoGithub1eedaegonPipelineV1PipelineSpecScheduleToJSON(value['schedule']),
        'trigger': value['trigger'],
        'volumes': value['volumes'] == null ? undefined : ((value['volumes'] as Array<any>).map(IoGithub1eedaegonPipelineV1PipelineSpecVolumesInnerToJSON)),
    };
}

