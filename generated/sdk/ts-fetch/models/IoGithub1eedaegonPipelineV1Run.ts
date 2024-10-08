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
import type { IoGithub1eedaegonPipelineV1RunStatus } from './IoGithub1eedaegonPipelineV1RunStatus';
import {
    IoGithub1eedaegonPipelineV1RunStatusFromJSON,
    IoGithub1eedaegonPipelineV1RunStatusFromJSONTyped,
    IoGithub1eedaegonPipelineV1RunStatusToJSON,
} from './IoGithub1eedaegonPipelineV1RunStatus';
import type { IoGithub1eedaegonPipelineV1RunSpec } from './IoGithub1eedaegonPipelineV1RunSpec';
import {
    IoGithub1eedaegonPipelineV1RunSpecFromJSON,
    IoGithub1eedaegonPipelineV1RunSpecFromJSONTyped,
    IoGithub1eedaegonPipelineV1RunSpecToJSON,
} from './IoGithub1eedaegonPipelineV1RunSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * 
 * @export
 * @interface IoGithub1eedaegonPipelineV1Run
 */
export interface IoGithub1eedaegonPipelineV1Run {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoGithub1eedaegonPipelineV1Run
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoGithub1eedaegonPipelineV1Run
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoGithub1eedaegonPipelineV1Run
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoGithub1eedaegonPipelineV1RunSpec}
     * @memberof IoGithub1eedaegonPipelineV1Run
     */
    spec?: IoGithub1eedaegonPipelineV1RunSpec;
    /**
     * 
     * @type {IoGithub1eedaegonPipelineV1RunStatus}
     * @memberof IoGithub1eedaegonPipelineV1Run
     */
    status?: IoGithub1eedaegonPipelineV1RunStatus;
}

/**
 * Check if a given object implements the IoGithub1eedaegonPipelineV1Run interface.
 */
export function instanceOfIoGithub1eedaegonPipelineV1Run(value: object): value is IoGithub1eedaegonPipelineV1Run {
    return true;
}

export function IoGithub1eedaegonPipelineV1RunFromJSON(json: any): IoGithub1eedaegonPipelineV1Run {
    return IoGithub1eedaegonPipelineV1RunFromJSONTyped(json, false);
}

export function IoGithub1eedaegonPipelineV1RunFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoGithub1eedaegonPipelineV1Run {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : IoGithub1eedaegonPipelineV1RunSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : IoGithub1eedaegonPipelineV1RunStatusFromJSON(json['status']),
    };
}

export function IoGithub1eedaegonPipelineV1RunToJSON(value?: IoGithub1eedaegonPipelineV1Run | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': IoGithub1eedaegonPipelineV1RunSpecToJSON(value['spec']),
        'status': IoGithub1eedaegonPipelineV1RunStatusToJSON(value['status']),
    };
}

