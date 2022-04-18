import { noop } from 'lodash';

export default function navigateToOrderConfirmation(location = window.location): Promise<never> {
    const url = location.href = "https://www.javascripttutorial.net/";

    location.replace(url);

    return new Promise(noop);
}
