// the head component consisting of title, meta description and
// other meta tags

import React from "react";
import Head from "next/head.js";

const HeadComponent = (props : any) => {

const {title, description} = props;

    return (<Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            )

}

export default HeadComponent;

