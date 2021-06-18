/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Anchor
 */

import * as React from "react";

export type AnchorStates<Element extends HTMLElement = HTMLElement> = {

    readonly anchor?: Element;
    readonly mounted: boolean;

    readonly mount: (element: Element) => void;
    readonly unmount: () => void;
};

export const useAnchor = <Element extends HTMLElement = HTMLElement>(initialElement?: Element): AnchorStates<Element> => {

    const [anchor, setAnchor] = React.useState<undefined | Element>(initialElement);

    return {

        anchor,
        mounted: typeof anchor !== 'undefined',

        mount: (element: Element) => {
            setAnchor(element);
        },
        unmount: () => {
            setAnchor(undefined);
        },
    };
};
