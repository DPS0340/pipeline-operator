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
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import type { IoGithub1eedaegonPipelineV1Run } from './IoGithub1eedaegonPipelineV1Run';
import {
    IoGithub1eedaegonPipelineV1RunFromJSON,
    IoGithub1eedaegonPipelineV1RunFromJSONTyped,
    IoGithub1eedaegonPipelineV1RunToJSON,
} from './IoGithub1eedaegonPipelineV1Run';

/**
 * RunList is a list of Run
 * @export
 * @interface IoGithub1eedaegonPipelineV1RunList
 */
export interface IoGithub1eedaegonPipelineV1RunList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoGithub1eedaegonPipelineV1RunList
     */
    apiVersion?: string;
    /**
     * List of runs. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     * @type {Array<IoGithub1eedaegonPipelineV1Run>}
     * @memberof IoGithub1eedaegonPipelineV1RunList
     */
    items: Array<IoGithub1eedaegonPipelineV1Run>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoGithub1eedaegonPipelineV1RunList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoGithub1eedaegonPipelineV1RunList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoGithub1eedaegonPipelineV1RunList interface.
 */
export function instanceOfIoGithub1eedaegonPipelineV1RunList(value: object): value is IoGithub1eedaegonPipelineV1RunList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function IoGithub1eedaegonPipelineV1RunListFromJSON(json: any): IoGithub1eedaegonPipelineV1RunList {
    return IoGithub1eedaegonPipelineV1RunListFromJSONTyped(json, false);
}

export function IoGithub1eedaegonPipelineV1RunListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoGithub1eedaegonPipelineV1RunList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoGithub1eedaegonPipelineV1RunFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoGithub1eedaegonPipelineV1RunListToJSON(value?: IoGithub1eedaegonPipelineV1RunList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(IoGithub1eedaegonPipelineV1RunToJSON)),
        'kind': value['kind'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

