import { IPartialTheme, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { BaseComponentContext } from '@microsoft/sp-component-base';
import { HostContainer } from 'adaptivecards-designer/lib/containers';
import { BindingPreviewMode, CardElementPeerType, CardElementType } from 'adaptivecards-designer/lib/card-designer-surface';
import { ElementSingletonBehavior, Version } from 'adaptivecards';

export interface IToolboxSnippet {
  name: string;
  category: string;
  payload: object;
}

export interface ICustomElement{
  element: CardElementType;
  peerElement: CardElementPeerType;
  typeName: string;
  schemaVersion?: Version;
  singletonBehavior?: ElementSingletonBehavior;
  iconClassName?: string;
  groupName?: string;
}

export interface IAdaptiveCardDesignerProps {
  /**
  * Set the context from SPFx component.
  */
  context: BaseComponentContext;
  /**
  * Set Fluent UI Theme.
  * Used only if the "themeType" property is set to 'ThemeType.SharePoint'.
  * If not set or set to null or not defined, the theme passed through context will be searched, or the default theme of the page will be loaded.
  */
  theme?: IPartialTheme | ITheme;
  /**
  * Set custom HostConfig.
  */
  hostConfig?: object;
  /**
  * Callback for saving the card.
  */
  onSave: (payload: object) => void;
  /**
   * Set Adaptive Card payload.
   */
  card?: object;
  /**
   * Set Data Source for template rendering.
   *
   * Example:
   *
   * ```typescript
   * {
   *    $root: {
   *        firstName: "Fabio",
   *        lastName: "Franzini",
   *        childrens: [
   *            { fullName: "Mattia Franzini", age: 1 }
   *        ]
   *    }
   * }
   * ```
   */
  data?: { "$root": object };
  /**
   * Set Adaptive Card payload for the New Card.
   */
  newCardPayload?: object;
  /**
   * Set custom HostContainers.
   */
  hostContainers?: HostContainer[];
  /**
   * Set the suported Versions.
   */
  supportedTargetVersions?: Version[];
  /**
   * Set the Toolbox Snippets.
   */
  snippets?: IToolboxSnippet[];
  /**
    * Set the Binding preview mode.
    */
  bindingPreviewMode?: BindingPreviewMode;
  /**
    * Enable the support for Data Binding.
    */
  enableDataBindingSupport?: boolean;
  /**
    * Enable the support for Data Binding.
    */
  selectedHostContainerControlsTargetVersion?: boolean;
  /**
  * Show the target version mismatch warning.
  */
  showTargetVersionMismatchWarning?: boolean;
  /**
  * Show the Version Picker.
  */
  showVersionPicker?: boolean;
  /**
   * Show the Sample Data Editor Toolbox.
   */
  showSampleDataEditorToolbox?: boolean;
  /**
   * Show the Data Structure Toolbox.
   */
  showDataStructureToolbox?: boolean;
  /**
    * Show the Fluent UI Breakpoint Picker.
    */
  showFluentBreakpointsPicker?: boolean;
  /**
    * Show the copy to json button.
    */
  showCopyToJsonToolbarCommand?: boolean;
  /**
    * Add the default Host Containers to the Picker.
    */
  addDefaultAdaptiveCardHostContainer?: boolean;
  /**
    * Inject the SPFx Context Property inside the Adaptive Card data object.
    */
  injectAdaptiveCardHostContextProperty?: boolean;
  /**
   * Add custom elements to the designer
   */
  customElements?: ICustomElement[]
}

export interface IAdaptiveCardDesignerHostProps extends IAdaptiveCardDesignerProps {
  /**
    * Set the Header text for the Adaptive Card Designer.
    */
  headerText: string;
  /**
   * Set the Button text for open the Adaptive Card Designer.
   */
  buttonText: string;
}