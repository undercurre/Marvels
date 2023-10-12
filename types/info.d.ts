declare namespace Info {
    type infoType = 'success' | 'warning' | 'error' | 'info' | 'like';

    type infoIcon = {
        type: infoType;
        name: string;
        color: string;
    };
}
