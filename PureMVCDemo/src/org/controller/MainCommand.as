////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////
package org.controller
{
	import org.apache.flex.core.Application;
	import org.facade.MainFacade;
	import org.proxy.MainProxy;
	import org.puremvc.as3.multicore.interfaces.ICommand;
	import org.puremvc.as3.multicore.interfaces.INotification;
	import org.puremvc.as3.multicore.patterns.command.SimpleCommand;
	import org.mediators.MainMediator;

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