import DisplayedLanguage from "../models/language";

export default class SessionService {
    private static saveInCache<T>(key: string, object: T): void {
        SessionService.saveTimestamp();
        localStorage.setItem(key, JSON.stringify(object));
    }

    private static getFromCache<T>(key: string, validate = true): T | null {
        if (validate && SessionService.reloadRequired()) {
            SessionService.clearCache();
        }
        const objectString = localStorage.getItem(key);
        if (objectString) {
            return JSON.parse(objectString) as T;
        }
        return null;
    }

    private static saveTimestamp(): void {
        if (!this.getTimestamp()) {
            localStorage.setItem('saveDate', Date.now().toString());
        }
    }

    private static getTimestamp(): number | null {
        const savedTimestamp: string | null = localStorage.getItem('saveDate');
        return savedTimestamp ? parseInt(savedTimestamp) : null;
    }

    private static reloadRequired(): boolean {
        const savedTimestamp: number | null = SessionService.getTimestamp();
        if (savedTimestamp) {
            const currentTimestamp: number = Date.now();
            const msDiff = currentTimestamp - savedTimestamp;
            const cacheLifespan = process.env.REACT_APP_CACHE_LIFESPAN ? process.env.REACT_APP_CACHE_LIFESPAN : 0;
            if (msDiff < cacheLifespan) {
                return false
            }
        }
        return true;
    }

    public static saveLanguage(language: DisplayedLanguage): void {
        SessionService.saveInCache<DisplayedLanguage>('language', language);
    }

    public static getLanguage(): DisplayedLanguage | null {
        return SessionService.getFromCache<DisplayedLanguage>('language', false);
    }

    public static clearCache(): void {
        let languageInCache = this.getLanguage();
        localStorage.clear();
        if (languageInCache !== null) {
            this.saveLanguage(languageInCache);
        }
    }
}
