import _ from 'lodash';

export class AppSettings {
    public readonly PORTRAITS_DIRECTORY = 'assets/img/portraits/'; 
    public readonly DEFAULT_AVATAR = 'adelaide_hanscom1.png';
    public readonly FULL_VIEW_MODE_MIN_WIDTH = 830; 
    public readonly DEFAULT_USER_ID = 1;
    
    private loader = { 
        'text': 'Please wait. I\'m loading data...', 
        'data': {
            'dictionary': { 'status' : false }, 
            'questions': { 'status' : false }, 
            'comments': { 'status' : false }, 
            'users': { 'status' : false } 
        }
    };
    
    public getLoaderText(): string {
        return this.loader.text;
    }
    
    public isDataLoaded(): boolean {
        return _.every(this.loader.data, 'status', true);
    }
    
    public isDataNotLoaded(): boolean {
        return !this.isDataLoaded();
    }
    
    public setLoadedStatus(resourceName: string): void {
        _.set(this.loader.data, `${resourceName}.status`, true);
    }
}
