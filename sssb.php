<?php
/*
  Plugin Name: Simple Social Share Block
  Plugin URI: https://avecnous.eu/
  Description: Social sharing block for Gurtenberg. Gutenberg should be activated for this plugin to work.
  Version: 1.0.0
  Author: N.O.U.S. Open Useful and Simple
  Author URI: https://avecnous.eu
  License: GPLv2
  Text Domain: simple-social-sharing-block
  Domain Path: /languages/
  Tags: gutenberg, social media, sharing, button, block
 */



// Exit if accessed directly.
defined('ABSPATH') || exit;


// check for Gutenberg

//if( function_exists('the_gutenberg_project') ){
  /**
   * Registers all block assets so that they can be enqueued through Gutenberg in
   * the corresponding context.
   *
   * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
   * @since 0.1
   */
  function socialsharing_block_init() {
  	global $EventPost;
  	$dir = dirname( __FILE__ );
  
    $block_js = '/build/social-sharing/index.js';
    wp_register_script('sssb-block-editor-script',plugins_url( $block_js, __FILE__ ),array('wp-blocks','wp-editor','wp-components','wp-i18n','wp-element',),filemtime( "$dir/$block_js" ));
  
  	$editor_css = '/build/social-sharing/style.css';
  	wp_register_style('sssb-block-editor-css',plugins_url( $editor_css, __FILE__ ),array(	'wp-blocks',),filemtime( "$dir/$editor_css" ));
    
    \register_block_type('social-sharing-button/social-sharing-button', array(
      'editor_script' => 'sssb-block-editor-script',
      'editor_style' => 'sssb-block-editor-css',
      'render_callback' => 'sssb_render_block',
    ));

    // Get translations from the PO file
    if(function_exists ( 'wp_set_script_translations')){
      $locale  = wp_set_script_translations( 'simple-social-sharing-block' , 'simple-social-sharing-block'  );
    }
     // Add translations to the JS object wp.i18n.setLocaleData
     $content = 'wp.i18n.setLocaleData(' . json_encode( $locale ) . ', "simple-social-sharing-block" );';
     // Add the JS inline do show the datas
     wp_script_add_data( 'sssb-block-editor-script', 'data', $content ); // Paramètre 1 : même nom que le script déclaré plus haut
  }
  add_action( 'init', 'socialsharing_block_init' );

  /**
   * Loads the languages folder
   *
   *
   * @since 1.0.0
  */
  function simple_social_sharing_block_load_textdomain() {
    load_plugin_textdomain( 'simple-social-sharing-block', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
  }
  add_action( 'plugins_loaded', 'simple_social_sharing_block_load_textdomain' );

  /**
   * Enqueue the block's assets.
   *
   * It should be noted that this hook fires on both the frontend
   * and the backend.
   *
   * CSS dependencies:
   * wp-blocks: The WordPress core block styles.
   *
   * @since 1.0.0
   */
  function sssb_block_style_enqueue() {
  	wp_enqueue_style(
  		'sssb-block-style', // Unique handle.
  		plugins_url( 'css/style.css', __FILE__ ), // style.css: This file styles the block both in the editor and on the frontend.

  		filemtime( plugin_dir_path( __FILE__ ) . 'css/style.css' ) // Version: filemtime - Gets file modification time.
  	);
  }
  add_action( 'enqueue_block_assets', 'sssb_block_style_enqueue' );


  /**
   * Defines the render of the block on the front side
   *
   *
   * @since 1.0.0
   */
  function sssb_render_block($atts){
    /**
     * Define the array of defaults
     */

    if(!is_array($atts)){
      $atts = array();
    }


    if(!isset($atts['text_email'])||$atts['text_email']==""){
      $atts['text_email'] = __('You might be interested by this article : %s','simple-social-sharing-block');
    }
    if(!isset($atts['object_email'])||$atts['object_email']==""){
      $atts['object_email'] = __('Have a look at this article : %s','simple-social-sharing-block');
    }
    if(!isset($atts['text_twitter'])||$atts['text_twitter']==""){
      $atts['text_twitter'] = __('Hey Twitter, Have a look at this! %s','simple-social-sharing-block');
    }
    if(!isset($atts['show_email'])){
      $atts['show_email'] = 1;
    }
    if(!isset($atts['show_print'])){
      $atts['show_print'] = 1;
    }
    if(!isset($atts['show_facebook'])){
      $atts['show_facebook'] = 1;
    }
    if(!isset($atts['show_twitter'])){
      $atts['show_twitter'] = 1;
    }
    if(!isset($atts['colour'])||$atts['colour']==""){
      $atts['colour'] = 'original';
    }
    if(!isset($atts['display'])||$atts['display']==""){
      $atts['display'] = 'icons';
    }
    if(!isset($atts['side'])||$atts['side']==""){
      $atts['side'] = 'right';
    }

    if(!isset($atts['url'])||$atts['url']==""){
      $atts['url'] = get_permalink();
    }


    if($atts['display']=="mail"){
      $div = "table";
      $ul = "tr";
      $li = "td";
    }else{
      $div = "div";
      $ul = "ul";
      $li = "li";
    }
    
    $render = '

    <'.$div.' class="wp-block-socia-sharing" >
      <'.$ul.' class="list-socia-sharing '.$atts['colour'].' '.$atts['side'].'">';

    if($atts['show_email']==1){
      $message=$atts['text_email'];
      $object=$atts['object_email'];

      $message .= '  '.$atts['url'];

      $message = sprintf($message,get_the_title());
      $object =  sprintf($object,get_the_title());

      $url = esc_url( 'mailto:?&subject='.$object.'&body='.$message , array('mailto'));

      $render .='<'.$li.'>
        <a class="share-button share-button_email '.$atts['display'].'"  href='.$url.'>';
          if($atts['display']=="mail"){
            $render .='<img src="'.plugins_url("images/icon-mail.png", __FILE__ ).'" style="display:block; margin: 0 5px;height:48px;">';
          }else{
            $render .='<span class="dashicons dashicons-email-alt"></span>';
          }

        $render .='</a>
      </'.$li.'>';
    }
    if($atts['show_print']==1){
      $render .='<'.$li.'>
        <a class="share-button share-button_print '.$atts['display'].'" href="javascript:window.print();">';
          if($atts['display']=="mail"){
            $render .='<img src="'.plugins_url("images/icon-pdf.png", __FILE__ ).'" style="display:block; margin: 0 5px;height:48px;">';
          }else{
            $render .='<span class="dashicons dashicons-media-document"></span>';
          }
        $render .='
        </a>
      </'.$li.'>';
    }

    if($atts['show_facebook']==1){
      $url = esc_url( 'https://www.facebook.com/sharer/sharer.php?u='.$atts['url']);
      $render .='<'.$li.'>
        <a onclick="window.open(this.href, \'_blank\', \'screenX=50,left=50,screenY=50,top=50, width=550, height=450,toolbar=no, location=no,resizable=yes, scrollbars=yes\');return false;"
          class="share-button share-button_facebook '.$atts['display'].'" href="'.$url.'">';
            if($atts['display']=="mail"){
              $render .='<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA4CAIAAADIJsd3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEE3MzMzQkMxRDQyMTFFNDhGN0M4NTU4NDNCN0YxNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEE3MzMzQkQxRDQyMTFFNDhGN0M4NTU4NDNCN0YxNTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTczMzNCQTFENDIxMUU0OEY3Qzg1NTg0M0I3RjE1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QTczMzNCQjFENDIxMUU0OEY3Qzg1NTg0M0I3RjE1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvJ6GeYAAAlQSURBVHja7FpNbxvX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" style="display:block; margin: 0 5px;height:48px;">';
            }else{
              $render .='<span class="dashicons dashicons-facebook-alt"></span>';
            }
          $render .='

        </a>
      </'.$li.'>';
    }
    if($atts['show_twitter']==1){
      $message=$atts['text_twitter'];
      $message = sprintf($message,get_the_title());

      $url = esc_url( 'http://twitter.com/intent/tweet?text='.$message.'&url='.$atts['url']);

      $render .='<'.$li.'>
        <a onclick="window.open(this.href, \'_blank\', \'screenX=50,left=50,screenY=50,top=50, width=550, height=450,toolbar=no, location=no,resizable=yes, scrollbars=yes\');return false;"
          class="share-button share-button_twitter '.$atts['display'].'" href="'.$url.'">';
            if($atts['display']=="mail"){
              $render .='<img src="data:image/png;base64,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" style="display:block; margin: 0 5px;height:48px;">';
            }else{
              $render .='<span class="dashicons dashicons-twitter"></span>';
            }
          $render .='

        </a>
      </'.$li.'>';
    }

    $render .='
      </'.$ul.'>
    </'.$div.'>';
    return $render;
  }



//}
add_shortcode( 'sssb', 'sssb_render_block' );
