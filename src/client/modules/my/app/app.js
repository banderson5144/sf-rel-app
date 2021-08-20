import { LightningElement } from 'lwc';

export default class App extends LightningElement
{
    isEnabled = false;
    isSet = false;

    connectedCallback()
    {
        var searchParams = new URLSearchParams(window.location.search);

        if(searchParams != null && searchParams.has('isEnabled'))
        {
            this.isSet = true;
            this.isEnabled = searchParams.get('isEnabled') === 'true';
        }
    }
}
