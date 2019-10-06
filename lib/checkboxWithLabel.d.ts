import * as React from 'react';
export declare class CheckboxWithLabel extends React.Component<{
    labelOn: string;
    labelOff: string;
}, {
    isChecked: boolean;
}> {
    constructor(props: any);
    onChange: () => void;
    render(): JSX.Element;
}
