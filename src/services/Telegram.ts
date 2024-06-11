export class Telegram {
	private tg: WebApp = window.Telegram.WebApp;

	constructor() {
		this.tg.ready();
	}

	public getUser(): WebAppUser {
		return this.tg.initDataUnsafe.user;
	}

    
}
