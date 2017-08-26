
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Railt" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt.html">Railt</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Railt_Adapters" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Adapters.html">Adapters</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Adapters_AdapterInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Adapters/AdapterInterface.html">AdapterInterface</a>                    </div>                </li>                            <li data-name="class:Railt_Adapters_RequestInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Adapters/RequestInterface.html">RequestInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Railt_Foundation" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Foundation.html">Foundation</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Foundation_ApiKernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Foundation/ApiKernel.html">ApiKernel</a>                    </div>                </li>                            <li data-name="class:Railt_Foundation_Dispatcher" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Foundation/Dispatcher.html">Dispatcher</a>                    </div>                </li>                            <li data-name="class:Railt_Foundation_KernelInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Foundation/KernelInterface.html">KernelInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Railt_Support" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Railt/Support.html">Support</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Railt_Support_Constructors" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Support/Constructors.html">Constructors</a>                    </div>                </li>                            <li data-name="class:Railt_Support_Debuggable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Support/Debuggable.html">Debuggable</a>                    </div>                </li>                            <li data-name="class:Railt_Support_HashMap" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Support/HashMap.html">HashMap</a>                    </div>                </li>                            <li data-name="class:Railt_Support_Loggable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Railt/Support/Loggable.html">Loggable</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Railt_Endpoint" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Railt/Endpoint.html">Endpoint</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Railt.html", "name": "Railt", "doc": "Namespace Railt"},{"type": "Namespace", "link": "Railt/Adapters.html", "name": "Railt\\Adapters", "doc": "Namespace Railt\\Adapters"},{"type": "Namespace", "link": "Railt/Foundation.html", "name": "Railt\\Foundation", "doc": "Namespace Railt\\Foundation"},{"type": "Namespace", "link": "Railt/Support.html", "name": "Railt\\Support", "doc": "Namespace Railt\\Support"},
            {"type": "Interface", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/AdapterInterface.html", "name": "Railt\\Adapters\\AdapterInterface", "doc": "&quot;Interface AdapterInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_isSupported", "name": "Railt\\Adapters\\AdapterInterface::isSupported", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method___construct", "name": "Railt\\Adapters\\AdapterInterface::__construct", "doc": "&quot;AdapterInterface constructor.&quot;"},
            
            {"type": "Interface", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/RequestInterface.html", "name": "Railt\\Adapters\\RequestInterface", "doc": "&quot;Interface RequestInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_all", "name": "Railt\\Adapters\\RequestInterface::all", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_get", "name": "Railt\\Adapters\\RequestInterface::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_has", "name": "Railt\\Adapters\\RequestInterface::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_getRelations", "name": "Railt\\Adapters\\RequestInterface::getRelations", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_hasRelation", "name": "Railt\\Adapters\\RequestInterface::hasRelation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_getPath", "name": "Railt\\Adapters\\RequestInterface::getPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_getFieldName", "name": "Railt\\Adapters\\RequestInterface::getFieldName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_getAlias", "name": "Railt\\Adapters\\RequestInterface::getAlias", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_hasAlias", "name": "Railt\\Adapters\\RequestInterface::hasAlias", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Railt\\Foundation", "fromLink": "Railt/Foundation.html", "link": "Railt/Foundation/KernelInterface.html", "name": "Railt\\Foundation\\KernelInterface", "doc": "&quot;Interface KernelInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Foundation\\KernelInterface", "fromLink": "Railt/Foundation/KernelInterface.html", "link": "Railt/Foundation/KernelInterface.html#method___construct", "name": "Railt\\Foundation\\KernelInterface::__construct", "doc": "&quot;KernelInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\KernelInterface", "fromLink": "Railt/Foundation/KernelInterface.html", "link": "Railt/Foundation/KernelInterface.html#method_resolve", "name": "Railt\\Foundation\\KernelInterface::resolve", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\KernelInterface", "fromLink": "Railt/Foundation/KernelInterface.html", "link": "Railt/Foundation/KernelInterface.html#method_decorate", "name": "Railt\\Foundation\\KernelInterface::decorate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\KernelInterface", "fromLink": "Railt/Foundation/KernelInterface.html", "link": "Railt/Foundation/KernelInterface.html#method_boot", "name": "Railt\\Foundation\\KernelInterface::boot", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/AdapterInterface.html", "name": "Railt\\Adapters\\AdapterInterface", "doc": "&quot;Interface AdapterInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method_isSupported", "name": "Railt\\Adapters\\AdapterInterface::isSupported", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\AdapterInterface", "fromLink": "Railt/Adapters/AdapterInterface.html", "link": "Railt/Adapters/AdapterInterface.html#method___construct", "name": "Railt\\Adapters\\AdapterInterface::__construct", "doc": "&quot;AdapterInterface constructor.&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Adapters", "fromLink": "Railt/Adapters.html", "link": "Railt/Adapters/RequestInterface.html", "name": "Railt\\Adapters\\RequestInterface", "doc": "&quot;Interface RequestInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_all", "name": "Railt\\Adapters\\RequestInterface::all", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_get", "name": "Railt\\Adapters\\RequestInterface::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_has", "name": "Railt\\Adapters\\RequestInterface::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_getRelations", "name": "Railt\\Adapters\\RequestInterface::getRelations", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_hasRelation", "name": "Railt\\Adapters\\RequestInterface::hasRelation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_getPath", "name": "Railt\\Adapters\\RequestInterface::getPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_getFieldName", "name": "Railt\\Adapters\\RequestInterface::getFieldName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_getAlias", "name": "Railt\\Adapters\\RequestInterface::getAlias", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Adapters\\RequestInterface", "fromLink": "Railt/Adapters/RequestInterface.html", "link": "Railt/Adapters/RequestInterface.html#method_hasAlias", "name": "Railt\\Adapters\\RequestInterface::hasAlias", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt", "fromLink": "Railt.html", "link": "Railt/Endpoint.html", "name": "Railt\\Endpoint", "doc": "&quot;Class Endpoint&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method___construct", "name": "Railt\\Endpoint::__construct", "doc": "&quot;Endpoint constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_router", "name": "Railt\\Endpoint::router", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_kernel", "name": "Railt\\Endpoint::kernel", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_autoload", "name": "Railt\\Endpoint::autoload", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_getEvents", "name": "Railt\\Endpoint::getEvents", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_getRouter", "name": "Railt\\Endpoint::getRouter", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Endpoint", "fromLink": "Railt/Endpoint.html", "link": "Railt/Endpoint.html#method_request", "name": "Railt\\Endpoint::request", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Foundation", "fromLink": "Railt/Foundation.html", "link": "Railt/Foundation/ApiKernel.html", "name": "Railt\\Foundation\\ApiKernel", "doc": "&quot;Class Kernel&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Foundation\\ApiKernel", "fromLink": "Railt/Foundation/ApiKernel.html", "link": "Railt/Foundation/ApiKernel.html#method___construct", "name": "Railt\\Foundation\\ApiKernel::__construct", "doc": "&quot;ApiKernel constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\ApiKernel", "fromLink": "Railt/Foundation/ApiKernel.html", "link": "Railt/Foundation/ApiKernel.html#method_on", "name": "Railt\\Foundation\\ApiKernel::on", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\ApiKernel", "fromLink": "Railt/Foundation/ApiKernel.html", "link": "Railt/Foundation/ApiKernel.html#method_boot", "name": "Railt\\Foundation\\ApiKernel::boot", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Foundation", "fromLink": "Railt/Foundation.html", "link": "Railt/Foundation/Dispatcher.html", "name": "Railt\\Foundation\\Dispatcher", "doc": "&quot;Class Dispatcher&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Foundation\\Dispatcher", "fromLink": "Railt/Foundation/Dispatcher.html", "link": "Railt/Foundation/Dispatcher.html#method_events", "name": "Railt\\Foundation\\Dispatcher::events", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\Dispatcher", "fromLink": "Railt/Foundation/Dispatcher.html", "link": "Railt/Foundation/Dispatcher.html#method_listen", "name": "Railt\\Foundation\\Dispatcher::listen", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\Dispatcher", "fromLink": "Railt/Foundation/Dispatcher.html", "link": "Railt/Foundation/Dispatcher.html#method_dispatch", "name": "Railt\\Foundation\\Dispatcher::dispatch", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Foundation", "fromLink": "Railt/Foundation.html", "link": "Railt/Foundation/KernelInterface.html", "name": "Railt\\Foundation\\KernelInterface", "doc": "&quot;Interface KernelInterface&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Foundation\\KernelInterface", "fromLink": "Railt/Foundation/KernelInterface.html", "link": "Railt/Foundation/KernelInterface.html#method___construct", "name": "Railt\\Foundation\\KernelInterface::__construct", "doc": "&quot;KernelInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\KernelInterface", "fromLink": "Railt/Foundation/KernelInterface.html", "link": "Railt/Foundation/KernelInterface.html#method_resolve", "name": "Railt\\Foundation\\KernelInterface::resolve", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\KernelInterface", "fromLink": "Railt/Foundation/KernelInterface.html", "link": "Railt/Foundation/KernelInterface.html#method_decorate", "name": "Railt\\Foundation\\KernelInterface::decorate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Foundation\\KernelInterface", "fromLink": "Railt/Foundation/KernelInterface.html", "link": "Railt/Foundation/KernelInterface.html#method_boot", "name": "Railt\\Foundation\\KernelInterface::boot", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "Railt\\Support", "fromLink": "Railt/Support.html", "link": "Railt/Support/Constructors.html", "name": "Railt\\Support\\Constructors", "doc": "&quot;Trait Constructors&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Support\\Constructors", "fromLink": "Railt/Support/Constructors.html", "link": "Railt/Support/Constructors.html#method_fromFileInfo", "name": "Railt\\Support\\Constructors::fromFileInfo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\Constructors", "fromLink": "Railt/Support/Constructors.html", "link": "Railt/Support/Constructors.html#method_fromFilePath", "name": "Railt\\Support\\Constructors::fromFilePath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\Constructors", "fromLink": "Railt/Support/Constructors.html", "link": "Railt/Support/Constructors.html#method_fromSources", "name": "Railt\\Support\\Constructors::fromSources", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\Constructors", "fromLink": "Railt/Support/Constructors.html", "link": "Railt/Support/Constructors.html#method_new", "name": "Railt\\Support\\Constructors::new", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "Railt\\Support", "fromLink": "Railt/Support.html", "link": "Railt/Support/Debuggable.html", "name": "Railt\\Support\\Debuggable", "doc": "&quot;Trait Debuggable&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Support\\Debuggable", "fromLink": "Railt/Support/Debuggable.html", "link": "Railt/Support/Debuggable.html#method_enableDebug", "name": "Railt\\Support\\Debuggable::enableDebug", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Railt\\Support", "fromLink": "Railt/Support.html", "link": "Railt/Support/HashMap.html", "name": "Railt\\Support\\HashMap", "doc": "&quot;Class HashMap&quot;"},
                                                        {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method___construct", "name": "Railt\\Support\\HashMap::__construct", "doc": "&quot;HashMap constructor.&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_putAll", "name": "Railt\\Support\\HashMap::putAll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_put", "name": "Railt\\Support\\HashMap::put", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_hasKey", "name": "Railt\\Support\\HashMap::hasKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_keys", "name": "Railt\\Support\\HashMap::keys", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_getIterator", "name": "Railt\\Support\\HashMap::getIterator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_hasValue", "name": "Railt\\Support\\HashMap::hasValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_values", "name": "Railt\\Support\\HashMap::values", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_clear", "name": "Railt\\Support\\HashMap::clear", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_count", "name": "Railt\\Support\\HashMap::count", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_offsetSet", "name": "Railt\\Support\\HashMap::offsetSet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_offsetExists", "name": "Railt\\Support\\HashMap::offsetExists", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_offsetUnset", "name": "Railt\\Support\\HashMap::offsetUnset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_remove", "name": "Railt\\Support\\HashMap::remove", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_offsetGet", "name": "Railt\\Support\\HashMap::offsetGet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Railt\\Support\\HashMap", "fromLink": "Railt/Support/HashMap.html", "link": "Railt/Support/HashMap.html#method_get", "name": "Railt\\Support\\HashMap::get", "doc": "&quot;&quot;"},
            
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


