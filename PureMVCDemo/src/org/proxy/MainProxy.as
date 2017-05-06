package org.proxy
{
	import org.facade.MainFacade;
	import org.puremvc.as3.multicore.interfaces.IProxy;
	import org.puremvc.as3.multicore.patterns.proxy.Proxy;

	public class MainProxy extends Proxy implements IProxy
	{
		public static const NAME:String = "mainProxy";
		
		public function MainProxy()
		{
			super(NAME);
		}
		
		public function setUIResult(vId:String):void
		{
			sendNotification(MainFacade.SET_UI_RESULT,vId);
		}
	}
}