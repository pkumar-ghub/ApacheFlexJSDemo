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
		
		public function startup(app:MainView):void
		{
			sendNotification(STARTUP,app);	
		}
	}
}