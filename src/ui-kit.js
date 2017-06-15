// Support
import UIEvents from './support/events.js';

// Directives
import vCollapse from './directives/collapse.js'
import vModal from './directives/modal.js';
import vSortable from './directives/sortable.js';

// Components
import UiAlert from './components/UiAlert.vue';
import UiBadge from './components/UiBadge.vue';
import UiCollapse from './components/UiCollapse.vue';
import UiDateTime from './components/UiDateTime.vue';
import UiDropdown from './components/UiDropdown.vue';
import UiDropzone from './components/UiDropzone.vue';
import UiGraph from './components/UiGraph.vue';
import UiGrid from './components/UiGrid.vue';
import UiInput from './components/UiInput.vue';
import UiListGroup from './components/UiListGroup.vue';
import UiListItem from './components/UiListItem.vue';
import UiMarkdown from './components/UiMarkdown.vue';
import UiModal from './components/UiModal.vue';
// import UiNestGroup from './components/UiNestGroup.vue';
// import UiNestItem from './components/UiNestItem.vue';
// import UiNestList from './components/UiNestList.vue';
// import UiNode from './components/UiNode.vue';
import UiOption from './components/UiOption.vue';
import UiOptionBuilder from './components/UiOptionBuilder.vue';
import UiPagination from './components/UiPagination.vue';
import UiProgress from './components/UiProgress.vue';
import UiProgressBar from './components/UiProgressBar.vue';
import UiSelect from './components/UiSelect.vue';
import UiSlug from './components/UiSlug.vue';
import UiTab from './components/UiTab.vue';
import UiTabs from './components/UiTabs.vue';
import UiToggle from './components/UiToggle.vue';
import UiTooltip from './components/UiTooltip.vue';
import UiTree from './components/UiTree.vue';
import UiWysiwyg from './components/UiWysiwyg.vue';

const UIKit = {
    UiAlert,
    UiBadge,
    UiCollapse,
    UiDateTime,
    UiDropdown,
    UiDropzone,
    UiGraph,
    UiGrid,
    UiInput,
    UiListGroup,
    UiListItem,
    UiMarkdown,
    UiModal,
    // UiNestGroup,
    // UiNestItem,
    // UiNestList,
    // UiNode,
    UiOption,
    UiOptionBuilder,
    UiPagination,
    UiProgress,
    UiProgressBar,
    UiSelect,
    UiSlug,
    UiTab,
    UiTabs,
    UiToggle,
    UiTooltip,
    UiTree,
    UiWysiwyg,

    install(Vue) {
        Vue.use(UIEvents);

        Vue.use(vCollapse);
        Vue.use(vModal);
        Vue.use(vSortable);

        Vue.component('ui-alert', UiAlert);
        Vue.component('ui-badge', UiBadge);
        Vue.component('ui-collapse', UiCollapse);
        Vue.component('ui-datetime', UiDateTime);
        Vue.component('ui-dropdown', UiDropdown);
        Vue.component('ui-dropzone', UiDropzone);
        Vue.component('ui-graph', UiGraph);
        Vue.component('ui-grid', UiGrid);
        Vue.component('ui-input', UiInput);
        Vue.component('ui-list-group', UiListGroup);
        Vue.component('ui-list-item', UiListItem);
        Vue.component('ui-markdown', UiMarkdown);
        Vue.component('ui-modal', UiModal);
        // Vue.component('ui-nest-group', UiNestGroup);
        // Vue.component('ui-nest-item', UiNestItem);
        // Vue.component('ui-nest-list', UiNestList);
        // Vue.component('ui-node', UiNode);
        Vue.component('ui-option', UiOption);
        Vue.component('ui-option-builder', UiOptionBuilder);
        Vue.component('ui-pagination', UiPagination);
        Vue.component('ui-progress', UiProgress);
        Vue.component('ui-progress-bar', UiProgressBar);
        Vue.component('ui-select', UiSelect);
        Vue.component('ui-slug', UiSlug);
        Vue.component('ui-tab', UiTab);
        Vue.component('ui-tabs', UiTabs);
        Vue.component('ui-toggle', UiToggle);
        Vue.component('ui-tooltip', UiTooltip);
        Vue.component('ui-tree', UiTree);
        Vue.component('ui-wysiwyg', UiWysiwyg);
    }
};

// Automatically install UIKit if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UIKit);
}

export default UIKit;

export { UiAlert };
export { UiBadge };
export { UiCollapse };
export { UiDateTime };
export { UiDropdown };
export { UiDropzone };
export { UiGraph };
export { UiGrid };
export { UiInput };
export { UiListGroup };
export { UiListItem };
export { UiMarkdown };
export { UiModal };
export { UiOption };
export { UiOptionBuilder };
export { UiPagination };
export { UiProgress };
export { UiProgressBar };
export { UiSelect };
export { UiSlug };
export { UiTab };
export { UiTabs };
export { UiToggle };
export { UiTooltip };
export { UiTree };
export { UiWysiwyg };
