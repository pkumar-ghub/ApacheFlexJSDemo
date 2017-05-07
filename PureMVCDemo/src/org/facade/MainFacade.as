package org.facade
{
	import org.controller.MainCommand;
	import org.puremvc.as3.multicore.patterns.facade.Facade;

	public class MainFacade extends Facade
	{
		public static const STARTUP:String = "startup";
		public static const SET_UI_RESULT:String = "setUIResult";
				
		public function MainFacade(key:String)
		{
			super(key);
		}
		
		public static function getInstance(key:String):MainFacade
		{
			if(instanceMap[key] == null )
				instanceMap[key] = new MainFacade(key);
			
			return instanceMap[key] as MainFacade; 
		}
		
		override protected function initializeController( ): void 
		{
			super.initializeController();            
			registerCommand( STARTUP, MainCommand);
		}
		
		public function startup(app:Main):void
		{
			sendNotification(STARTUP,app);	
		}
	}
}