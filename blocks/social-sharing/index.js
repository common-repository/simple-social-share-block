import {
  registerBlockType,
  RichText, // RichText is for Formatted content Editable areas (its value is an array)
  PlainText, // PlainText is for Formatted content Editable areas (its value is a string)
} from "@wordpress/blocks";

// Just a way to wrap elements without producing any wrapper markup
import {
	InspectorControls
} from "@wordpress/editor";

// Just a way to wrap elements without producing any wrapper markup
import {
	Fragment,
	RawHTML
} from "@wordpress/element";

// Components contain several reusable React components
import {
	CheckboxControl,
	RangeControl,
	SelectControl,
	TextControl,
  TextareaControl,
  ToggleControl
} from "@wordpress/components";

const __ = wp.i18n.__;

import "./style.scss";

registerBlockType("sssb/block", {
  title: __("Social Sharing Button", 'simple-social-sharing-block'),
  icon: "share",
  category: "common",
  attributes: {
      display: {type: 'string'},
      colour: {type: 'string'},
      side: {type: 'string'},

      show_facebook: {type: 'number'},

      show_twitter: {type: 'number'},
      text_twitter: {type: 'string'},

      show_email: {type: 'number'},
      object_email: {type: 'string'},
      text_email: {type: 'string'},

      show_print: {type: 'number'},

      url: {type: 'string'},
  },

  edit({ className, attributes, setAttributes, isSelected, id }) {
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

	const setdisplay = display => setAttributes({ display });
	const setcolour = colour => setAttributes({ colour  });
	const setside = side => setAttributes({ side });

  const setshow_facebook = value => {
       setAttributes( { show_facebook: value } );
   };



  const setshow_twitter = value => {
       setAttributes( { show_twitter: value } );
   };
	const settext_twitter = text_twitter => setAttributes({ text_twitter });



  const setshow_email = value => {
       setAttributes( { show_email: value } );
   };
  const setobject_email = object_email => setAttributes({ object_email  });
	const settext_email = text_email => setAttributes({ text_email  });



  const setshow_print = value => {
       setAttributes( { show_print: value } );
   };

   const seturl = value => {
        setAttributes( { url: value } );
    };

	return (
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

        <SelectControl
        label={__('Display :', 'simple-social-sharing-block')}
        value={display}
        className="first_control"
        options={[
          { label: __('Images', 'simple-social-sharing-block'), value: "images" },
          { label: __('Icons', 'simple-social-sharing-block'), value: "icons" },
        ]}
        onChange={setdisplay}
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
          onChange={setcolour}
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
          onChange={setcolour}
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
        onChange={setcolour}
        />

        <SelectControl
        label={__('Alignment :', 'simple-social-sharing-block')}
        value={side}
        className="first_control"
        options={[
          { label: __('Aligned Right', 'simple-social-sharing-block'), value: "right" },
          { label: __('Aligned Left', 'simple-social-sharing-block'), value: "left" },
        ]}
        onChange={setside}
        />


        <ToggleControl
        label={__('Show eMail', 'simple-social-sharing-block')}
        checked={show_email}
        onChange={setshow_email}
        />
        {show_email && (
          <TextControl
          label={__('Object', 'simple-social-sharing-block')}
  				value={object_email}
  				onChange={setobject_email}
  				className="setobject_email share_text"
  				placeholder={__('Have a look at this!', 'simple-social-sharing-block')}
                  help={__('This is the object that will be used by default when sharing via eMail. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')}
  			  />
        )}
        {show_email && (

          <TextareaControl
  				value={text_email}
          label={__('Body', 'simple-social-sharing-block')}
  				onChange={settext_email}
  				className="settext_email share_text"
  				placeholder={__('You might be interested in this article.', 'simple-social-sharing-block')}
                  help={__('This is the text that will be used by default when sharing via eMail. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')}
  			  />
        )}

        <ToggleControl
        label={__('Show Print', 'simple-social-sharing-block')}
        checked={show_print}
        onChange={setshow_print}
        />

        <ToggleControl
        label={__('Show Facebook', 'simple-social-sharing-block')}
        checked={show_facebook}
        onChange={setshow_facebook}
        />


        <ToggleControl
        label={__('Show Twitter', 'simple-social-sharing-block')}
        checked={show_twitter}
        onChange={setshow_twitter}
        />
        {show_twitter && (
          <TextareaControl
          value={text_twitter}
          label={__('Message', 'simple-social-sharing-block')}
          onChange={settext_twitter}
          className="settext_twitter share_text"
          placeholder={__('Hey Twitter!', 'simple-social-sharing-block')}
                  help={__('This is the text that will be used by default when sharing on Twitter. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')}
          />
        )}

        <TextControl
        value={url}
        label={__('URL', 'simple-social-sharing-block')}
        onChange={seturl}
        className="seturl"
        placeholder={__('Current Page', 'simple-social-sharing-block')}
                help={__('The above will change the URL for the Sharing, if left empty the URL will be the one of the current page. It must be a valid URL.', 'simple-social-sharing-block')}
        />
			</InspectorControls>
		  )}
		</Fragment>
	);
  },

  save() {
	return null;
  }
});
