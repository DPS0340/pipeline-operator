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
import type { IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery } from './IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery';
import {
    IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSON,
    IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryToJSON,
} from './IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery';
import type { IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from './IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';
import {
    IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSON,
    IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';

/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1APIGroup
 */
export interface IoK8sApimachineryPkgApisMetaV1APIGroup {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIGroup
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIGroup
     */
    kind?: string;
    /**
     * name is the name of the group.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIGroup
     */
    name: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIGroup
     */
    preferredVersion?: IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery;
    /**
     * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
     * @type {Array<IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIGroup
     */
    serverAddressByClientCIDRs?: Array<IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;
    /**
     * versions are the versions supported in this group.
     * @type {Array<IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery>}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIGroup
     */
    versions: Array<IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery>;
}

/**
 * Check if a given object implements the IoK8sApimachineryPkgApisMetaV1APIGroup interface.
 */
export function instanceOfIoK8sApimachineryPkgApisMetaV1APIGroup(value: object): value is IoK8sApimachineryPkgApisMetaV1APIGroup {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('versions' in value) || value['versions'] === undefined) return false;
    return true;
}

export function IoK8sApimachineryPkgApisMetaV1APIGroupFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1APIGroup {
    return IoK8sApimachineryPkgApisMetaV1APIGroupFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1APIGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApimachineryPkgApisMetaV1APIGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'name': json['name'],
        'preferredVersion': json['preferredVersion'] == null ? undefined : IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSON(json['preferredVersion']),
        'serverAddressByClientCIDRs': json['serverAddressByClientCIDRs'] == null ? undefined : ((json['serverAddressByClientCIDRs'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSON)),
        'versions': ((json['versions'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSON)),
    };
}

export function IoK8sApimachineryPkgApisMetaV1APIGroupToJSON(value?: IoK8sApimachineryPkgApisMetaV1APIGroup | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'name': value['name'],
        'preferredVersion': IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryToJSON(value['preferredVersion']),
        'serverAddressByClientCIDRs': value['serverAddressByClientCIDRs'] == null ? undefined : ((value['serverAddressByClientCIDRs'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRToJSON)),
        'versions': ((value['versions'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryToJSON)),
    };
}

