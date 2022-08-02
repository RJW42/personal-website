import React from 'react';


type PClassName = {
   className?: string
};

type PId = {
   id?: string
};

type PTestId = {
   'data-testid'?: string
};

type PChildren = {
   children?: React.ReactNode;
};


export type {PClassName, PId, PTestId, PChildren};