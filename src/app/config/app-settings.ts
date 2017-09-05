import _ from 'lodash'

export class AppSettings {
    public static readonly PORTRAITS_DIRECTORY = 'assets/img/portraits/'; 
    public static readonly DEFAULT_AVATAR = 'adelaide_hanscom1.png';
    public static readonly FULL_VIEW_MODE_MIN_WIDTH = 830; 
    public static readonly DEFAULT_USER_ID = 1;
    
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
        _.set(this.loader.data, resourceName+'.status', true);
    }
}
