
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Railt" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt.html">Railt</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Railt_Adapters" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Adapters.html">Adapters</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Adapters_AdapterInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Adapters/AdapterInterface.html">AdapterInterface</a>                    </div>                </li>                            <li data-name="class:Railt_Adapters_BuilderInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Adapters/BuilderInterface.html">BuilderInterface</a>                    </div>                </li>                            <li data-name="class:Railt_Adapters_Factory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Adapters/Factory.html">Factory</a>                    </div>                </li>                            <li data-name="class:Railt_Adapters_InputInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Adapters/InputInterface.html">InputInterface</a>                    </div>                </li>                            <li data-name="class:Railt_Adapters_TypeLoaderInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Adapters/TypeLoaderInterface.html">TypeLoaderInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Railt_Commands" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Commands.html">Commands</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Commands_AbstractCommand" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Commands/AbstractCommand.html">AbstractCommand</a>                    </div>                </li>                            <li data-name="class:Railt_Commands_DevelopmentModeCommand" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Commands/DevelopmentModeCommand.html">DevelopmentModeCommand</a>                    </div>                </li>                            <li data-name="class:Railt_Commands_DevelopmentServerCommand" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Commands/DevelopmentServerCommand.html">DevelopmentServerCommand</a>                    </div>                </li>                            <li data-name="class:Railt_Commands_DocsGenerateCommand" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Commands/DocsGenerateCommand.html">DocsGenerateCommand</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Railt_Container" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Container.html">Container</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Railt_Container_Definitions" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Container/Definitions.html">Definitions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Container_Definitions_DefinitionInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Railt/Container/Definitions/DefinitionInterface.html">DefinitionInterface</a>                    </div>                </li>                            <li data-name="class:Railt_Container_Definitions_FactoryDefinition" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Railt/Container/Definitions/FactoryDefinition.html">FactoryDefinition</a>                    </div>                </li>                            <li data-name="class:Railt_Container_Definitions_SingletonDefinition" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Railt/Container/Definitions/SingletonDefinition.html">SingletonDefinition</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Railt_Container_Exceptions" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Container/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Container_Exceptions_ContainerResolutionException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Railt/Container/Exceptions/ContainerResolutionException.html">ContainerResolutionException</a>                    </div>                </li>                            <li data-name="class:Railt_Container_Exceptions_ParameterResolutionException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Railt/Container/Exceptions/ParameterResolutionException.html">ParameterResolutionException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Railt_Container_Container" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Container/Container.html">Container</a>                    </div>                </li>                            <li data-name="class:Railt_Container_ContainerInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Container/ContainerInterface.html">ContainerInterface</a>                    </div>                </li>                            <li data-name="class:Railt_Container_ParamResolver" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Container/ParamResolver.html">ParamResolver</a>                    </div>                </li>                            <li data-name="class:Railt_Container_Parameters" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Container/Parameters.html">Parameters</a>                    </div>                </li>                            <li data-name="class:Railt_Container_Proxy" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Container/Proxy.html">Proxy</a>                    </div>                </li>                            <li data-name="class:Railt_Container_StringableAction" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Container/StringableAction.html">StringableAction</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Railt_Events" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Events.html">Events</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Events_Dispatcher" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Events/Dispatcher.html">Dispatcher</a>                    </div>                </li>                            <li data-name="class:Railt_Events_DispatcherInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Events/DispatcherInterface.html">DispatcherInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Railt_Support" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Support.html">Support</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Support_Debuggable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Support/Debuggable.html">Debuggable</a>                    </div>                </li>                            <li data-name="class:Railt_Support_Loggable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Support/Loggable.html">Loggable</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Railt_Endpoint" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Railt/Endpoint.html">Endpoint</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Railt.html", "name": "Railt", "doc": "Namespace Railt"},{"type": "Namespace", "link": "Railt/Adapters.html", "name": "Railt\\Adapters", "doc": "Namespace Railt\\Adapters"},{"type": "Namespace", "link": "Railt/Commands.html", "name": "Railt\\Commands", "doc": "Namespace Railt\\Commands"},{"type": "Namespace", "link": "Railt/Container.html", "name": "Railt\\Container", "doc": "Namespace Railt\\Container"},{"type": "Namespace", "link": "Railt/Container/Definitions.html", "name": "Railt\\Container\\Definitions", "doc": "Namespace Railt\\Container\\Definitions"},{"type": "Namespace", "link": "Railt/Container/Exceptions.html", "name": "Railt\\Container\\Exceptions", "doc": "Namespace Railt\\Container\\Exceptions"},{"type": "Namespace", "link": "Railt/Events.html", "name": "Railt\\Events", "doc": "Namespace Railt\\Events"},{"type": "Namespace", "link": "Railt/Support.html", "name": "Railt\\Support", "doc": "Namespace Railt\\Support"},
            {"type": "Interface", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/AdapterInterface.html", "name": "Railt\\Adapters\\AdapterInterface", "doc": "&quot;Interface AdapterInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method___construct", "name": "Railt\\Adapters\\AdapterInterface::__construct", "doc": "&quot;AdapterInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_getEvents", "name": "Railt\\Adapters\\AdapterInterface::getEvents", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_getRouter", "name": "Railt\\Adapters\\AdapterInterface::getRouter", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_getLoader", "name": "Railt\\Adapters\\AdapterInterface::getLoader", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_isSupported", "name": "Railt\\Adapters\\AdapterInterface::isSupported", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/BuilderInterface.html", "name": "Railt\\Adapters\\BuilderInterface", "doc": "&quot;Interface BuilderInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\BuilderInterface", "fromLink": "Railt/Adapters/BuilderInterface.html", "link": "Railt/Adapters/BuilderInterface.html#method___construct", "name": "Railt\\Adapters\\BuilderInterface::__construct", "doc": "&quot;BuilderInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\BuilderInterface", "fromLink": "Railt/Adapters/BuilderInterface.html", "link": "Railt/Adapters/BuilderInterface.html#method_getTarget", "name": "Railt\\Adapters\\BuilderInterface::getTarget", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\BuilderInterface", "fromLink": "Railt/Adapters/BuilderInterface.html", "link": "Railt/Adapters/BuilderInterface.html#method_build", "name": "Railt\\Adapters\\BuilderInterface::build", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/InputInterface.html", "name": "Railt\\Adapters\\InputInterface", "doc": "&quot;Interface InputInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_all", "name": "Railt\\Adapters\\InputInterface::all", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_get", "name": "Railt\\Adapters\\InputInterface::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_has", "name": "Railt\\Adapters\\InputInterface::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_getRelations", "name": "Railt\\Adapters\\InputInterface::getRelations", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_hasRelation", "name": "Railt\\Adapters\\InputInterface::hasRelation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_getPath", "name": "Railt\\Adapters\\InputInterface::getPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_getFieldName", "name": "Railt\\Adapters\\InputInterface::getFieldName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_getAlias", "name": "Railt\\Adapters\\InputInterface::getAlias", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_hasAlias", "name": "Railt\\Adapters\\InputInterface::hasAlias", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/TypeLoaderInterface.html", "name": "Railt\\Adapters\\TypeLoaderInterface", "doc": "&quot;Interface TypeLoaderInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\TypeLoaderInterface", "fromLink": "Railt/Adapters/TypeLoaderInterface.html", "link": "Railt/Adapters/TypeLoaderInterface.html#method_resolve", "name": "Railt\\Adapters\\TypeLoaderInterface::resolve", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\TypeLoaderInterface", "fromLink": "Railt/Adapters/TypeLoaderInterface.html", "link": "Railt/Adapters/TypeLoaderInterface.html#method_make", "name": "Railt\\Adapters\\TypeLoaderInterface::make", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Railt\\Container", "fromLink": "Railt/Container.html", "link": "Railt/Container/ContainerInterface.html", "name": "Railt\\Container\\ContainerInterface", "doc": "&quot;Interface ContainerInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\ContainerInterface", "fromLink": "Railt/Container/ContainerInterface.html", "link": "Railt/Container/ContainerInterface.html#method_call", "name": "Railt\\Container\\ContainerInterface::call", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Railt\\Container\\Definitions", "fromLink": "Railt/Container/Definitions.html", "link": "Railt/Container/Definitions/DefinitionInterface.html", "name": "Railt\\Container\\Definitions\\DefinitionInterface", "doc": "&quot;Interface DefinitionInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\Definitions\\DefinitionInterface", "fromLink": "Railt/Container/Definitions/DefinitionInterface.html", "link": "Railt/Container/Definitions/DefinitionInterface.html#method___construct", "name": "Railt\\Container\\Definitions\\DefinitionInterface::__construct", "doc": "&quot;DefinitionInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Definitions\\DefinitionInterface", "fromLink": "Railt/Container/Definitions/DefinitionInterface.html", "link": "Railt/Container/Definitions/DefinitionInterface.html#method_resolve", "name": "Railt\\Container\\Definitions\\DefinitionInterface::resolve", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Railt\\Events", "fromLink": "Railt/Events.html", "link": "Railt/Events/DispatcherInterface.html", "name": "Railt\\Events\\DispatcherInterface", "doc": "&quot;Interface Dispatchable&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Events\\DispatcherInterface", "fromLink": "Railt/Events/DispatcherInterface.html", "link": "Railt/Events/DispatcherInterface.html#method_listen", "name": "Railt\\Events\\DispatcherInterface::listen", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Events\\DispatcherInterface", "fromLink": "Railt/Events/DispatcherInterface.html", "link": "Railt/Events/DispatcherInterface.html#method_dispatch", "name": "Railt\\Events\\DispatcherInterface::dispatch", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/AdapterInterface.html", "name": "Railt\\Adapters\\AdapterInterface", "doc": "&quot;Interface AdapterInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method___construct", "name": "Railt\\Adapters\\AdapterInterface::__construct", "doc": "&quot;AdapterInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_getEvents", "name": "Railt\\Adapters\\AdapterInterface::getEvents", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_getRouter", "name": "Railt\\Adapters\\AdapterInterface::getRouter", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_getLoader", "name": "Railt\\Adapters\\AdapterInterface::getLoader", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_isSupported", "name": "Railt\\Adapters\\AdapterInterface::isSupported", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/BuilderInterface.html", "name": "Railt\\Adapters\\BuilderInterface", "doc": "&quot;Interface BuilderInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\BuilderInterface", "fromLink": "Railt/Adapters/BuilderInterface.html", "link": "Railt/Adapters/BuilderInterface.html#method___construct", "name": "Railt\\Adapters\\BuilderInterface::__construct", "doc": "&quot;BuilderInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\BuilderInterface", "fromLink": "Railt/Adapters/BuilderInterface.html", "link": "Railt/Adapters/BuilderInterface.html#method_getTarget", "name": "Railt\\Adapters\\BuilderInterface::getTarget", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\BuilderInterface", "fromLink": "Railt/Adapters/BuilderInterface.html", "link": "Railt/Adapters/BuilderInterface.html#method_build", "name": "Railt\\Adapters\\BuilderInterface::build", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/Factory.html", "name": "Railt\\Adapters\\Factory", "doc": "&quot;Class Factory&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\Factory", "fromLink": "Railt/Adapters/Factory.html", "link": "Railt/Adapters/Factory.html#method_register", "name": "Railt\\Adapters\\Factory::register", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\Factory", "fromLink": "Railt/Adapters/Factory.html", "link": "Railt/Adapters/Factory.html#method_create", "name": "Railt\\Adapters\\Factory::create", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/InputInterface.html", "name": "Railt\\Adapters\\InputInterface", "doc": "&quot;Interface InputInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_all", "name": "Railt\\Adapters\\InputInterface::all", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_get", "name": "Railt\\Adapters\\InputInterface::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_has", "name": "Railt\\Adapters\\InputInterface::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_getRelations", "name": "Railt\\Adapters\\InputInterface::getRelations", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_hasRelation", "name": "Railt\\Adapters\\InputInterface::hasRelation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_getPath", "name": "Railt\\Adapters\\InputInterface::getPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_getFieldName", "name": "Railt\\Adapters\\InputInterface::getFieldName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_getAlias", "name": "Railt\\Adapters\\InputInterface::getAlias", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\InputInterface", "fromLink": "Railt/Adapters/InputInterface.html", "link": "Railt/Adapters/InputInterface.html#method_hasAlias", "name": "Railt\\Adapters\\InputInterface::hasAlias", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/TypeLoaderInterface.html", "name": "Railt\\Adapters\\TypeLoaderInterface", "doc": "&quot;Interface TypeLoaderInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\TypeLoaderInterface", "fromLink": "Railt/Adapters/TypeLoaderInterface.html", "link": "Railt/Adapters/TypeLoaderInterface.html#method_resolve", "name": "Railt\\Adapters\\TypeLoaderInterface::resolve", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\TypeLoaderInterface", "fromLink": "Railt/Adapters/TypeLoaderInterface.html", "link": "Railt/Adapters/TypeLoaderInterface.html#method_make", "name": "Railt\\Adapters\\TypeLoaderInterface::make", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Commands", "fromLink": "Railt/Commands.html", "link": "Railt/Commands/AbstractCommand.html", "name": "Railt\\Commands\\AbstractCommand", "doc": "&quot;Class AbstractCommand&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Commands\\AbstractCommand", "fromLink": "Railt/Commands/AbstractCommand.html", "link": "Railt/Commands/AbstractCommand.html#method_configure", "name": "Railt\\Commands\\AbstractCommand::configure", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Commands\\AbstractCommand", "fromLink": "Railt/Commands/AbstractCommand.html", "link": "Railt/Commands/AbstractCommand.html#method_execute", "name": "Railt\\Commands\\AbstractCommand::execute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Commands\\AbstractCommand", "fromLink": "Railt/Commands/AbstractCommand.html", "link": "Railt/Commands/AbstractCommand.html#method_projectRoot", "name": "Railt\\Commands\\AbstractCommand::projectRoot", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Commands\\AbstractCommand", "fromLink": "Railt/Commands/AbstractCommand.html", "link": "Railt/Commands/AbstractCommand.html#method_handle", "name": "Railt\\Commands\\AbstractCommand::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Commands", "fromLink": "Railt/Commands.html", "link": "Railt/Commands/DevelopmentModeCommand.html", "name": "Railt\\Commands\\DevelopmentModeCommand", "doc": "&quot;Class DevelopmentModeCommand&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Commands\\DevelopmentModeCommand", "fromLink": "Railt/Commands/DevelopmentModeCommand.html", "link": "Railt/Commands/DevelopmentModeCommand.html#method_handle", "name": "Railt\\Commands\\DevelopmentModeCommand::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Commands", "fromLink": "Railt/Commands.html", "link": "Railt/Commands/DevelopmentServerCommand.html", "name": "Railt\\Commands\\DevelopmentServerCommand", "doc": "&quot;Class DevelopmentServerCommand&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Commands\\DevelopmentServerCommand", "fromLink": "Railt/Commands/DevelopmentServerCommand.html", "link": "Railt/Commands/DevelopmentServerCommand.html#method_handle", "name": "Railt\\Commands\\DevelopmentServerCommand::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Commands", "fromLink": "Railt/Commands.html", "link": "Railt/Commands/DocsGenerateCommand.html", "name": "Railt\\Commands\\DocsGenerateCommand", "doc": "&quot;Class DevelopmentServerCommand&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Commands\\DocsGenerateCommand", "fromLink": "Railt/Commands/DocsGenerateCommand.html", "link": "Railt/Commands/DocsGenerateCommand.html#method_handle", "name": "Railt\\Commands\\DocsGenerateCommand::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container", "fromLink": "Railt/Container.html", "link": "Railt/Container/Container.html", "name": "Railt\\Container\\Container", "doc": "&quot;Class Container&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\Container", "fromLink": "Railt/Container/Container.html", "link": "Railt/Container/Container.html#method___construct", "name": "Railt\\Container\\Container::__construct", "doc": "&quot;Container constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Container", "fromLink": "Railt/Container/Container.html", "link": "Railt/Container/Container.html#method_call", "name": "Railt\\Container\\Container::call", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Container", "fromLink": "Railt/Container/Container.html", "link": "Railt/Container/Container.html#method_get", "name": "Railt\\Container\\Container::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Container", "fromLink": "Railt/Container/Container.html", "link": "Railt/Container/Container.html#method_has", "name": "Railt\\Container\\Container::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Container", "fromLink": "Railt/Container/Container.html", "link": "Railt/Container/Container.html#method_factory", "name": "Railt\\Container\\Container::factory", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Container", "fromLink": "Railt/Container/Container.html", "link": "Railt/Container/Container.html#method_singleton", "name": "Railt\\Container\\Container::singleton", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container", "fromLink": "Railt/Container.html", "link": "Railt/Container/ContainerInterface.html", "name": "Railt\\Container\\ContainerInterface", "doc": "&quot;Interface ContainerInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\ContainerInterface", "fromLink": "Railt/Container/ContainerInterface.html", "link": "Railt/Container/ContainerInterface.html#method_call", "name": "Railt\\Container\\ContainerInterface::call", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container\\Definitions", "fromLink": "Railt/Container/Definitions.html", "link": "Railt/Container/Definitions/DefinitionInterface.html", "name": "Railt\\Container\\Definitions\\DefinitionInterface", "doc": "&quot;Interface DefinitionInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\Definitions\\DefinitionInterface", "fromLink": "Railt/Container/Definitions/DefinitionInterface.html", "link": "Railt/Container/Definitions/DefinitionInterface.html#method___construct", "name": "Railt\\Container\\Definitions\\DefinitionInterface::__construct", "doc": "&quot;DefinitionInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Definitions\\DefinitionInterface", "fromLink": "Railt/Container/Definitions/DefinitionInterface.html", "link": "Railt/Container/Definitions/DefinitionInterface.html#method_resolve", "name": "Railt\\Container\\Definitions\\DefinitionInterface::resolve", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container\\Definitions", "fromLink": "Railt/Container/Definitions.html", "link": "Railt/Container/Definitions/FactoryDefinition.html", "name": "Railt\\Container\\Definitions\\FactoryDefinition", "doc": "&quot;Class FactoryDefinition&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\Definitions\\FactoryDefinition", "fromLink": "Railt/Container/Definitions/FactoryDefinition.html", "link": "Railt/Container/Definitions/FactoryDefinition.html#method___construct", "name": "Railt\\Container\\Definitions\\FactoryDefinition::__construct", "doc": "&quot;FactoryDefinition constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Definitions\\FactoryDefinition", "fromLink": "Railt/Container/Definitions/FactoryDefinition.html", "link": "Railt/Container/Definitions/FactoryDefinition.html#method_resolve", "name": "Railt\\Container\\Definitions\\FactoryDefinition::resolve", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container\\Definitions", "fromLink": "Railt/Container/Definitions.html", "link": "Railt/Container/Definitions/SingletonDefinition.html", "name": "Railt\\Container\\Definitions\\SingletonDefinition", "doc": "&quot;Class SingletonDefinition&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\Definitions\\SingletonDefinition", "fromLink": "Railt/Container/Definitions/SingletonDefinition.html", "link": "Railt/Container/Definitions/SingletonDefinition.html#method_resolve", "name": "Railt\\Container\\Definitions\\SingletonDefinition::resolve", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container\\Exceptions", "fromLink": "Railt/Container/Exceptions.html", "link": "Railt/Container/Exceptions/ContainerResolutionException.html", "name": "Railt\\Container\\Exceptions\\ContainerResolutionException", "doc": "&quot;Class ContainerResolutionException&quot;"},
                    
            {"type": "Class", "fromName": "Railt\\Container\\Exceptions", "fromLink": "Railt/Container/Exceptions.html", "link": "Railt/Container/Exceptions/ParameterResolutionException.html", "name": "Railt\\Container\\Exceptions\\ParameterResolutionException", "doc": "&quot;Class ParameterResolutionException&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\Exceptions\\ParameterResolutionException", "fromLink": "Railt/Container/Exceptions/ParameterResolutionException.html", "link": "Railt/Container/Exceptions/ParameterResolutionException.html#method___construct", "name": "Railt\\Container\\Exceptions\\ParameterResolutionException::__construct", "doc": "&quot;ParameterResolutionException constructor.&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container", "fromLink": "Railt/Container.html", "link": "Railt/Container/ParamResolver.html", "name": "Railt\\Container\\ParamResolver", "doc": "&quot;Class ParamResolver&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\ParamResolver", "fromLink": "Railt/Container/ParamResolver.html", "link": "Railt/Container/ParamResolver.html#method___construct", "name": "Railt\\Container\\ParamResolver::__construct", "doc": "&quot;ParamResolver constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\ParamResolver", "fromLink": "Railt/Container/ParamResolver.html", "link": "Railt/Container/ParamResolver.html#method_resolve", "name": "Railt\\Container\\ParamResolver::resolve", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container", "fromLink": "Railt/Container.html", "link": "Railt/Container/Parameters.html", "name": "Railt\\Container\\Parameters", "doc": "&quot;Class Parameters&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\Parameters", "fromLink": "Railt/Container/Parameters.html", "link": "Railt/Container/Parameters.html#method___construct", "name": "Railt\\Container\\Parameters::__construct", "doc": "&quot;Parameters constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Parameters", "fromLink": "Railt/Container/Parameters.html", "link": "Railt/Container/Parameters.html#method_with", "name": "Railt\\Container\\Parameters::with", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Parameters", "fromLink": "Railt/Container/Parameters.html", "link": "Railt/Container/Parameters.html#method_call", "name": "Railt\\Container\\Parameters::call", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Parameters", "fromLink": "Railt/Container/Parameters.html", "link": "Railt/Container/Parameters.html#method_get", "name": "Railt\\Container\\Parameters::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Parameters", "fromLink": "Railt/Container/Parameters.html", "link": "Railt/Container/Parameters.html#method_has", "name": "Railt\\Container\\Parameters::has", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container", "fromLink": "Railt/Container.html", "link": "Railt/Container/Proxy.html", "name": "Railt\\Container\\Proxy", "doc": "&quot;Class Proxy&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\Proxy", "fromLink": "Railt/Container/Proxy.html", "link": "Railt/Container/Proxy.html#method___construct", "name": "Railt\\Container\\Proxy::__construct", "doc": "&quot;Proxy constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Proxy", "fromLink": "Railt/Container/Proxy.html", "link": "Railt/Container/Proxy.html#method_call", "name": "Railt\\Container\\Proxy::call", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Proxy", "fromLink": "Railt/Container/Proxy.html", "link": "Railt/Container/Proxy.html#method_get", "name": "Railt\\Container\\Proxy::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\Proxy", "fromLink": "Railt/Container/Proxy.html", "link": "Railt/Container/Proxy.html#method_has", "name": "Railt\\Container\\Proxy::has", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Container", "fromLink": "Railt/Container.html", "link": "Railt/Container/StringableAction.html", "name": "Railt\\Container\\StringableAction", "doc": "&quot;Class StringableAction&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Container\\StringableAction", "fromLink": "Railt/Container/StringableAction.html", "link": "Railt/Container/StringableAction.html#method___construct", "name": "Railt\\Container\\StringableAction::__construct", "doc": "&quot;StringableAction constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\StringableAction", "fromLink": "Railt/Container/StringableAction.html", "link": "Railt/Container/StringableAction.html#method_toCallable", "name": "Railt\\Container\\StringableAction::toCallable", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\StringableAction", "fromLink": "Railt/Container/StringableAction.html", "link": "Railt/Container/StringableAction.html#method_stringToArray", "name": "Railt\\Container\\StringableAction::stringToArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\StringableAction", "fromLink": "Railt/Container/StringableAction.html", "link": "Railt/Container/StringableAction.html#method_split", "name": "Railt\\Container\\StringableAction::split", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\StringableAction", "fromLink": "Railt/Container/StringableAction.html", "link": "Railt/Container/StringableAction.html#method_verifyActionClass", "name": "Railt\\Container\\StringableAction::verifyActionClass", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\StringableAction", "fromLink": "Railt/Container/StringableAction.html", "link": "Railt/Container/StringableAction.html#method_verifyActionMethod", "name": "Railt\\Container\\StringableAction::verifyActionMethod", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Container\\StringableAction", "fromLink": "Railt/Container/StringableAction.html", "link": "Railt/Container/StringableAction.html#method_verifyActionPartsCount", "name": "Railt\\Container\\StringableAction::verifyActionPartsCount", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt", "fromLink": "Railt.html", "link": "Railt/Endpoint.html", "name": "Railt\\Endpoint", "doc": "&quot;Class Endpoint&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method___construct", "name": "Railt\\Endpoint::__construct", "doc": "&quot;Endpoint constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_getContainer", "name": "Railt\\Endpoint::getContainer", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_getAutoloader", "name": "Railt\\Endpoint::getAutoloader", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_getCompiler", "name": "Railt\\Endpoint::getCompiler", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_getEvents", "name": "Railt\\Endpoint::getEvents", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_getRouter", "name": "Railt\\Endpoint::getRouter", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_request", "name": "Railt\\Endpoint::request", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Events", "fromLink": "Railt/Events.html", "link": "Railt/Events/Dispatcher.html", "name": "Railt\\Events\\Dispatcher", "doc": "&quot;Class Dispatcher&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Events\\Dispatcher", "fromLink": "Railt/Events/Dispatcher.html", "link": "Railt/Events/Dispatcher.html#method_events", "name": "Railt\\Events\\Dispatcher::events", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Events\\Dispatcher", "fromLink": "Railt/Events/Dispatcher.html", "link": "Railt/Events/Dispatcher.html#method_listen", "name": "Railt\\Events\\Dispatcher::listen", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Events\\Dispatcher", "fromLink": "Railt/Events/Dispatcher.html", "link": "Railt/Events/Dispatcher.html#method_dispatch", "name": "Railt\\Events\\Dispatcher::dispatch", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Events", "fromLink": "Railt/Events.html", "link": "Railt/Events/DispatcherInterface.html", "name": "Railt\\Events\\DispatcherInterface", "doc": "&quot;Interface Dispatchable&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Events\\DispatcherInterface", "fromLink": "Railt/Events/DispatcherInterface.html", "link": "Railt/Events/DispatcherInterface.html#method_listen", "name": "Railt\\Events\\DispatcherInterface::listen", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Events\\DispatcherInterface", "fromLink": "Railt/Events/DispatcherInterface.html", "link": "Railt/Events/DispatcherInterface.html#method_dispatch", "name": "Railt\\Events\\DispatcherInterface::dispatch", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "Railt\\Support", "fromLink": "Railt/Support.html", "link": "Railt/Support/Debuggable.html", "name": "Railt\\Support\\Debuggable", "doc": "&quot;Trait Debuggable&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Support\\Debuggable", "fromLink": "Railt/Support/Debuggable.html", "link": "Railt/Support/Debuggable.html#method_enableDebug", "name": "Railt\\Support\\Debuggable::enableDebug", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "Railt\\Support", "fromLink": "Railt/Support.html", "link": "Railt/Support/Loggable.html", "name": "Railt\\Support\\Loggable", "doc": "&quot;Trait Loggable&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Support\\Loggable", "fromLink": "Railt/Support/Loggable.html", "link": "Railt/Support/Loggable.html#method_withLogger", "name": "Railt\\Support\\Loggable::withLogger", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\Loggable", "fromLink": "Railt/Support/Loggable.html", "link": "Railt/Support/Loggable.html#method_debug", "name": "Railt\\Support\\Loggable::debug", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\Loggable", "fromLink": "Railt/Support/Loggable.html", "link": "Railt/Support/Loggable.html#method_notice", "name": "Railt\\Support\\Loggable::notice", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\Loggable", "fromLink": "Railt/Support/Loggable.html", "link": "Railt/Support/Loggable.html#method_error", "name": "Railt\\Support\\Loggable::error", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


