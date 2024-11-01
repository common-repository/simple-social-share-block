=== Plugin Name ===
Contributors: bastho, leroysabrina, agencenous
Donate link: https://apps.avecnous.eu/produit/bloc-de-partage-social-simple/?mtm_campaign=wp-plugin&mtm_kwd=simple-social-share-block&mtm_medium=wp-repo&mtm_source=donate
Tags: social, block, sharing
Requires at least: 4.9.7
Tested up to: 6.1
Stable tag:  1.0
Requires PHP: 5.2.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Social sharing block for Gurtenberg. Gutenberg should be activated for this plugin to work.

== Description ==

With this plugin, you can add social sharing buttons as blocks in Gutenberg.
As a first version we created only the ones we needed : print, mail, Facebook and Twitter.
You can choose Dashicons or images, and the original colours for those network, or a grayscale version.

You can use the shortcode [sssb], with the following attributes:

* text_email : string, will be the body of the email when sharing via email | Default : You might be interested by this article : %s | You can use %s it will be replaced by the title of the current post
* object_email : string, will be the object of the email when sharing via email | Default : Have a look at this article : %s | You can use %s it will be replaced by the title of the current post
* text_twitter : string, will be the default text when sharing via twitter | Default : Hey Twitter, Have a look at this! %s | You can use %s it will be replaced by the title of the current post
* show_email : 0 or 1, will 1=show or 0=hide the email button | Default : 1
* show_print : 0 or 1, will 1=show or 0=hide the print button | Default : 1
* show_facebook : 0 or 1, will 1=show or 0=hide the facebook button | Default : 1
* show_twitter : 0 or 1, will 1=show or 0=hide the twitter button | Default : 1
* colour : original, grayscale, black or white | Default : original
* display : icons or images or mail | Default : icons | mail will generate a table
* side : left or right | Default : right
* url : url | Default : current page

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/plugin-name` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Go to a page or post edited with Gutenberg
4. Start Adding the block Social Sharing button


== Frequently Asked Questions ==

= Can I add other Social network ? =

Nope

= Can I hide one or more of the four social networks provided ? =

Yep

== Screenshots ==

1. Images + Grayscale
2. Icons + Colour
3. Icons + Colour + No Print button

== Changelog ==

= 1.0 =

* Hot fix for WP rétro-compatibility : check if wp_set_script_translations function exists

= 0.9 =

* Hot fix for Gutenberg compatibility : Dependencies correction


= 0.8 =

* Set default value for checkbox to true, it fixes the behaviour of showing nothing when the block is added the first time to the page
* Change Checkboxes to Toggles, because it looks nicer


= 0.7 =

* Removed the possibility of selecting black and white for image display, keeping it for icons only


= 0.5 & 0.6 =

* mail added to the display option, it builds an array instead of a list and show img instead of background images to work without CSS

= 0.4 =

* URL added as a parameter in both shortcode and block


= 0.3 =

* Black and White added as a colour choice

= 0.2 =

* Shortcode Added
* Alignement Left or Right

== Contribution ==

To contribute, in CLI

* sudo apt install npm
* npm install && npm run build
* npm run dev
