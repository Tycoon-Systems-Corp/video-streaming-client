// Import your custom modules created under /customModules like so.
// Refer to them in app.config.js like so:
// {
//    type: 'CustomModule', props: { className: 'content', customModule:'FeatureModule1', ...variables, ...props }
// }


// entry.js
import FeatureModule1 from './features/FeatureModule1'

const Modules = {
    FeatureModule1
}

export default Modules