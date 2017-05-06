package org.controller
{
	import org.apache.flex.core.Application;
	import org.facade.MainFacade;
	import org.proxy.MainProxy;
	import org.puremvc.as3.multicore.interfaces.ICommand;
	import org.puremvc.as3.multicore.interfaces.INotification;
	import org.puremvc.as3.multicore.patterns.command.SimpleCommand;
	import org.view.MainMediator;

	public class MainCommand extends SimpleCommand implements ICommand
	{
		override public function execute(notification:INotification):void
		{
			facade.removeCommand(MainFacade.STARTUP);
			
			facade.registerProxy(new MainProxy());
			facade.registerMediator(new MainMediator(notification.getBody() as Application));
		}
	}
}