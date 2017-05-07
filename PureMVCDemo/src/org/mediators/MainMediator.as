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
package org.mediators
{
	import org.apache.flex.core.Application;
	import org.apache.flex.events.MouseEvent;
	import org.facade.MainFacade;
	import org.proxy.MainProxy;
	import org.puremvc.as3.multicore.interfaces.INotification;
	import org.puremvc.as3.multicore.patterns.mediator.Mediator;
	import org.apache.flex.collections.ArrayList;
	import org.apache.flex.html.SimpleAlert;
    import org.view.MyInitialView;

    public class MainMediator extends Mediator
	{
		public static const NAME:String = 'MainMediator';
		private var profileArray:Array = new Array();
		
		public function MainMediator(viewComp:Application)
		{
			super(NAME, viewComp);
		}
		
		override public function onRegister():void
		{
			var mainView:MyInitialView = app.initialView as MyInitialView;
			mainView.buttonId1.addEventListener(MouseEvent.CLICK , onButtonClick);
			mainView.buttonId3.addEventListener(MouseEvent.CLICK , onButtonClick);
		}
		
		private function get app():Main
		{
			return this.viewComponent as Main
		}
		
		private function onButtonClick(evnt:MouseEvent):void
		{
			var viewState:String = "default";
			
			if(evnt.target.id == "buttonId1")
				viewState = "editor";
			else 
				viewState = "profile";
			
			proxy.setUIResult(viewState);	
		}
		
		override public function listNotificationInterests():Array
		{
			return [
				MainFacade.SET_UI_RESULT
			];
		}
		
		override public function handleNotification(notification:INotification):void
		{
			var name:String = notification.getName();
			var body:String = notification.getBody() as String;
			
			var mainView:MyInitialView = app.initialView as MyInitialView;
			mainView.currentState = body;

			if(mainView.currentState == "editor")
			{
				mainView.editorViewId.btnAddId.addEventListener(MouseEvent.CLICK , onAddClick);
			}				
			else
			{
				mainView.profileViewId.profileGridId.dataProvider = new ArrayList(profileArray);
			}			

		}

		private function onAddClick(evt:MouseEvent):void
		{
			var mainView:MyInitialView = app.initialView as MyInitialView;

			var tempObj:Object = new Object();
			tempObj.id = mainView.editorViewId.txtId.text;
			tempObj.name = mainView.editorViewId.txtName.text;
			tempObj.company = mainView.editorViewId.txtComp.text;
			tempObj.doj = mainView.editorViewId.dojId.selectedDate.toString();
			profileArray.push(tempObj);

			SimpleAlert.show("Profile added",app);
		}
		
		private function get proxy():MainProxy
		{
			return facade.retrieveProxy(MainProxy.NAME) as MainProxy;
		}
	}
}