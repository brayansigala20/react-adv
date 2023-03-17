import NoLazyLoad from "../01-Lazyload/pages/NoLazyLoad";
import { lazy } from "react";
import {LazyExoticComponent} from 'react'
 type JSXElement = () => JSX.Element
interface rutas {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXElement> | JSXElement;
    name: string
}
const prevComp1 = lazy(() => import(/* webpackChunkName: "LazyLoadLayout" */'../01-Lazyload/layout/LazyLoyaut'))


export const routes: rutas[] = [
    {
        to: '/LazyLayout',
        path: 'LazyLayout/*',
        Component: prevComp1,
        name: 'LazyloadLayout'
    },
    {
        to: '/NoLazyLoad',
        path: 'NoLazyLoad',
        Component: NoLazyLoad,
        name: 'NoLazyLoad'
    },
]