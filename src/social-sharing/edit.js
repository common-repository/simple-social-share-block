  // Just a way to wrap elements without producing any wrapper markup
  import {
    InspectorControls,
    useBlockProps,
  } from '@wordpress/block-editor';

  // Just a way to wrap elements without producing any wrapper markup
    import {
      Fragment,
      RawHTML
    } from "@wordpress/element";
  // Components contain several reusable React components
    import {
      CheckboxControl,
      ToggleControl,
      TextareaControl,
      RangeControl,
      SelectControl,
      TextControl,
      PanelBody
    }  from "@wordpress/components";
    
    const __ = wp.i18n.__;

  import ServerSideRender from '@wordpress/server-side-render';

  export default function Edit({ className, attributes, setAttributes, isSelected, id }) {
    const blockProps = useBlockProps();

    const {
      display,
      colour,
      side,
      show_facebook = true,
      show_twitter = true,
      text_twitter,
      show_email = true,
      object_email,
      text_email,
      show_print = true,
      url,
    } = attributes;

    function onChangeDisplay(newValue){
      setAttributes({ display: newValue });
    }
    function onChangeColour(newValue){
      setAttributes({ colour: newValue });
    }	
    function onChangeSide(newValue){
      setAttributes({ side: newValue });
    }	
    function onChangeShow_Facebook(newValue){
      setAttributes({ show_facebook: newValue });
    }	
    function onChangeShow_Twitter(newValue){
      setAttributes({ show_twitter: newValue });
    }	
    function onChangeText_Twitter(newValue){
      setAttributes({ text_twitter: newValue });
    }	
    function onChangeShow_Email(newValue){
      setAttributes({ show_email: newValue });
    }	
    function onChangeObject_Email(newValue){
      setAttributes({ object_email: newValue });
    }	
    function onChangeShow_Print(newValue){
      setAttributes({ show_print: newValue });
    }
    function onChangeText_Email(newValue){
      setAttributes({ text_email: newValue });
    }  
    function onChangeUrl(newValue){
      setAttributes({ url: newValue });
    }

	return (
  <div {...blockProps}>

		<Fragment>
      <div className={"wp-block-socia-sharing"} id={"preview-"+id}>
        <ul className={"list-socia-sharing "+colour+" "+side}>

          {show_email==1 && (
            <li>
              <a className={"share-button share-button_email "+display}>
                  <span className={"dashicons dashicons-email-alt"}></span>
              </a>
            </li>
          )}
          {show_print==1 && (
            <li>
              <a className={"share-button share-button_print "+display}>
                  <span className={"dashicons dashicons-media-document"}></span>
              </a>
            </li>
          )}
          {show_facebook==1 && (
            <li>
              <a className={"share-button share-button_facebook "+display}>
                  <span className={"dashicons dashicons-facebook-alt"}></span>
              </a>
            </li>
          )}
          {show_twitter==1 && (
            <li>
              <a className={"share-button share-button_twitter "+display}>
                  <span className={"dashicons dashicons-twitter"}></span>
              </a>
            </li>
          )}
        </ul>
      </div>
    {isSelected && (
			<InspectorControls>
        <PanelBody title={__("Display", "simple-social-sharing-block")}>
          <SelectControl
            label={__('Display :', 'simple-social-sharing-block')}
            value={display}
            className="first_control"
            options={[
              { label: __('Images', 'simple-social-sharing-block'), value: "images" },
              { label: __('Icons', 'simple-social-sharing-block'), value: "icons" },
            ]}
            onChange={onChangeDisplay}
          />
        {display=="icons" && (
          <SelectControl
          label={__('Colour :', 'simple-social-sharing-block')}
          value={colour}
          options={[
            { label: __('Originals', 'simple-social-sharing-block'), value: "original" },
            { label: __('Grayscale', 'simple-social-sharing-block'), value: "grayscale" },
            { label: __('Black', 'simple-social-sharing-block'), value: "black" },
            { label: __('White', 'simple-social-sharing-block'), value: "white" },
          ]}
          onChange={onChangeColour}
          />
        )}

        {display=="images" && (
          <SelectControl
          label={__('Colour :', 'simple-social-sharing-block')}
          value={colour}
          options={[
            { label: __('Originals', 'simple-social-sharing-block'), value: "original" },
            { label: __('Grayscale', 'simple-social-sharing-block'), value: "grayscale" },
          ]}
          onChange={onChangeColour}
          />
        )}

        <SelectControl
        label={__('Colour :', 'simple-social-sharing-block')}
        value={colour}
        options={[
          { label: __('Originals', 'simple-social-sharing-block'), value: "original" },
          { label: __('Grayscale', 'simple-social-sharing-block'), value: "grayscale" },
          { label: __('Black', 'simple-social-sharing-block'), value: "black" },
          { label: __('White', 'simple-social-sharing-block'), value: "white" },
        ]}
        onChange={onChangeColour}
        />

        <SelectControl
        label={__('Alignment :', 'simple-social-sharing-block')}
        value={side}
        className="first_control"
        options={[
          { label: __('Aligned Right', 'simple-social-sharing-block'), value: "right" },
          { label: __('Aligned Left', 'simple-social-sharing-block'), value: "left" },
        ]}
        onChange={onChangeSide}
        />


        <ToggleControl
        label={__('Show eMail', 'simple-social-sharing-block')}
        checked={show_email}
        onChange={onChangeShow_Email}
        />
        {show_email && (
          <TextControl
          label={__('Object', 'simple-social-sharing-block')}
  				value={object_email}
  				onChange={onChangeObject_Email}
  				className="setobject_email share_text"
  				placeholder={__('Have a look at this!', 'simple-social-sharing-block')}
                  help={__('This is the object that will be used by default when sharing via eMail. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')}
  			  />
        )}
        {show_email && (

          <TextareaControl
  				value={text_email}
          label={__('Body', 'simple-social-sharing-block')}
  				onChange={onChangeText_Email}
  				className="settext_email share_text"
  				placeholder={__('You might be interested in this article.', 'simple-social-sharing-block')}
                  help={__('This is the text that will be used by default when sharing via eMail. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')}
  			  />
        )}

        <ToggleControl
        label={__('Show Print', 'simple-social-sharing-block')}
        checked={show_print}
        onChange={onChangeShow_Print}
        />

        <ToggleControl
        label={__('Show Facebook', 'simple-social-sharing-block')}
        checked={show_facebook}
        onChange={onChangeShow_Facebook}
        />


        <ToggleControl
        label={__('Show Twitter', 'simple-social-sharing-block')}
        checked={show_twitter}
        onChange={onChangeShow_Twitter}
        />
        {show_twitter && (
          <TextareaControl
          value={text_twitter}
          label={__('Message', 'simple-social-sharing-block')}
          onChange={onChangeText_Twitter}
          className="settext_twitter share_text"
          placeholder={__('Hey Twitter!', 'simple-social-sharing-block')}
                  help={__('This is the text that will be used by default when sharing on Twitter. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')}
          />
        )}

        <TextControl
        value={url}
        label={__('URL', 'simple-social-sharing-block')}
        onChange={onChangeUrl}
        className="seturl"
        placeholder={__('Current Page', 'simple-social-sharing-block')}
                help={__('The above will change the URL for the Sharing, if left empty the URL will be the one of the current page. It must be a valid URL.', 'simple-social-sharing-block')}
        />
        </PanelBody>
			</InspectorControls>
      )}
      <ServerSideRender
        block="social-sharing-button/social-sharing-button"
        attributes={attributes}
      />
      
		</Fragment>
    </div>
	);
}
