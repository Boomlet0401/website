package boomlet.web.controller;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import boomlet.app.dao.BlogDAO;
import boomlet.app.dao.FacebookDAO;
import boomlet.app.dao.InfluancerDAO;
import boomlet.app.dao.InstagramDAO;
import boomlet.app.dao.LinkedinDAO;
import boomlet.app.dao.TiktokDAO;
import boomlet.app.dao.TwitterDAO;
import boomlet.app.data.Blog;
import boomlet.app.data.Facebook;
import boomlet.app.data.Influancer;
import boomlet.app.data.Instagram;
import boomlet.app.data.Linkedin;
import boomlet.app.data.Tiktok;
import boomlet.app.data.Twitter;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	InfluancerDAO influncerdao;

	@Autowired
	LinkedinDAO linkedindao;

	@Autowired
	InstagramDAO instagramdao;

	@Autowired
	BlogDAO blogdao;

	@Autowired
	TwitterDAO twitterdao;

	@Autowired
	FacebookDAO facebookdao;
	
	@Autowired
	TiktokDAO tiktokdao;

	@SuppressWarnings("unchecked")
	@PostMapping("/create-influancer")
	public Map<String, Object> createInfluncer(@RequestBody Map<String, Object> requestParams) {

		Influancer influancer = new Influancer();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		Map<String, String> error = new HashMap<String, String>();
		boolean validation = false;
		String name = (String) requestParams.get("name");
		String country = (String) requestParams.get("country");
		String email = (String) requestParams.get("email");
		String contact_1 = (String) requestParams.get("contact_1");
		String contact_2 = (String) requestParams.get("contact_2");
		String contact_3 = (String) requestParams.get("contact_3");
		String gender = (String) requestParams.get("gender");
		String type = (String) requestParams.get("type");
		List<String> selectedLanguages = (List<String>) requestParams.get("selectedLanguages");
		ArrayList<String> selectedLocations = (ArrayList<String>) requestParams.get("selectedLocations");
		ArrayList<String> selectedCategories = (ArrayList<String>) requestParams.get("selectedCategories");
		ArrayList<String> selectedVendors = (ArrayList<String>) requestParams.get("selectedVendors");
		String remark = (String) requestParams.get("remark");

		// Check all Validation
		if (name == null || name.equalsIgnoreCase("")) {
			error.put("name", "Please enter name");
			validation = true;
		}
		if (country == null || country.equalsIgnoreCase("")) {
			error.put("country", "Please enter country");
			validation = true;
		}
		if (email == null || email.equalsIgnoreCase("")) {
			error.put("email", "Please enter email");
			validation = true;
		}
		if (contact_1 == null || contact_1.equalsIgnoreCase("")) {
			error.put("contact_1", "Please enter contact");
			validation = true;
		}
		if (contact_2 == null || contact_2.equalsIgnoreCase("")) {
			error.put("contact_2", "Please enter contact");
			validation = true;
		}
		if (gender == null || gender.equalsIgnoreCase("")) {
			error.put("gender", "Please select gender");
			validation = true;
		}
		if (type == null || type.equalsIgnoreCase("")) {
			error.put("type", "Please select type");
			validation = true;
		}
		if (selectedLanguages == null || selectedLanguages.size() == 0) {
			error.put("language", "Please select language");
			validation = true;
		}
		if (selectedLocations == null || selectedLocations.size() == 0) {
			error.put("location", "Please select location");
			validation = true;
		}
		if (selectedCategories == null || selectedCategories.size() == 0) {
			error.put("category", "Please select category");
			validation = true;
		}
		if (selectedVendors == null || selectedVendors.size() == 0) {
			error.put("vendor", "Please select vendor");
			validation = true;
		}

		if (validation) {
			map.put("ferror", error);
			return map;
		} else {
			map.put("ferror", error);
		}

		Gson gson = new Gson();
		
		// Set Influencer Data
		influancer.setName(name);
		influancer.setCountry(country);
		influancer.setEmail(email);
		influancer.setContact_1(contact_1);
		influancer.setContact_2(contact_2);
		influancer.setContact_3(contact_3);
		influancer.setGender(gender);
		influancer.setType(type);
		influancer.setLanguage(gson.toJson(selectedLanguages));
		influancer.setLocation(gson.toJson(selectedLocations));
		influancer.setCategory(gson.toJson(selectedCategories));
		influancer.setVendor(gson.toJson(selectedVendors));
		influancer.setRemark(remark);
		influancer.setCreated_by(42);
		influancer.setAproved(false);

		BigInteger influencer_id = influncerdao.save(influancer);
		if (!(influencer_id.longValue() > 0)) {
			map.put("status", "error");
			map.put("message", "Something wrong try again");
			return map;
		}

		// Get Linkedin form data
		boolean l_verified = (boolean) requestParams.get("l_verified");
		boolean l_active = (boolean) requestParams.get("l_active");
		String l_link = (String) requestParams.get("l_link");
		String l_connections = (String) requestParams.get("l_connections");
		String l_post_cost = (String) requestParams.get("l_post_cost");
		// Save Linkedin data
		Linkedin linkedin = new Linkedin();
		linkedin.setInfluencer_id(influencer_id.longValue());
		linkedin.setConnections(l_connections);
		linkedin.setLink(l_link);
		linkedin.setPost_cost(l_post_cost);
		linkedin.setVerified(l_verified);
		linkedin.setActive(l_active);
		linkedindao.save(linkedin);

		// Get Instagram form data
		boolean verified_insta = (boolean) requestParams.get("verified_insta");
		boolean active_insta = (boolean) requestParams.get("active_insta");
		String insta_link = (String) requestParams.get("insta_link");
		String insta_followers = (String) requestParams.get("insta_followers");
		String insta_video_cost = (String) requestParams.get("insta_video_cost");
		String insta_story_cost = (String) requestParams.get("insta_story_cost");
		String insta_post_cost = (String) requestParams.get("insta_post_cost");
		// Save Instagram data
		Instagram instagram = new Instagram();
		instagram.setInfluencer_id(influencer_id.longValue());
		instagram.setFollowers(insta_followers);
		instagram.setStory_cost(insta_story_cost);
		instagram.setVideo_cost(insta_video_cost);
		instagram.setPost_cost(insta_post_cost);
		instagram.setLink(insta_link);
		instagram.setVerified(verified_insta);
		instagram.setActive(active_insta);
		instagramdao.save(instagram);

		// Get Blog form data
		boolean active_blog = (boolean) requestParams.get("active_blog");
		String blog_link = (String) requestParams.get("blog_link");
		String blog_page_view = (String) requestParams.get("blog_page_view");
		String blog_article_cost = (String) requestParams.get("blog_article_cost");
		// Save Blog data
		Blog blog = new Blog();
		blog.setInfluencer_id(influencer_id.longValue());
		blog.setLink(blog_link);
		blog.setPage_view(blog_page_view);
		blog.setActicle_cost(blog_article_cost);
		blog.setActive(active_blog);
		blogdao.save(blog);

		// Get Twitter form data
		boolean verified_tw = (boolean) requestParams.get("verified_tw");
		boolean active_tw = (boolean) requestParams.get("active_tw");
		String tw_link = (String) requestParams.get("tw_link");
		String tw_connections = (String) requestParams.get("tw_connections");
		String tw_post_cost = (String) requestParams.get("tw_post_cost");
		// Save Twitter data
		Twitter twiter = new Twitter();
		twiter.setInfluencer_id(influencer_id.longValue());
		twiter.setConnections(tw_connections);
		twiter.setLink(tw_link);
		twiter.setPost_cost(tw_post_cost);
		twiter.setVerified(verified_tw);
		twiter.setActive(active_tw);
		twitterdao.save(twiter);

		// Get Facebook form data
		boolean verified_fb = (boolean) requestParams.get("verified_fb");
		boolean active_fb = (boolean) requestParams.get("active_fb");
		String fb_link = (String) requestParams.get("fb_link");
		String fb_followers = (String) requestParams.get("fb_followers");
		String fb_video_cost = (String) requestParams.get("fb_video_cost");
		String fb_story_cost = (String) requestParams.get("fb_story_cost");
		String fb_post_cost = (String) requestParams.get("fb_post_cost");
		// Save Facebook data
		Facebook facebook = new Facebook();
		facebook.setInfluencer_id(influencer_id.longValue());
		facebook.setFollowers(fb_followers);
		facebook.setStory_cost(fb_story_cost);
		facebook.setVideo_cost(fb_video_cost);
		facebook.setPost_cost(fb_post_cost);
		facebook.setLink(fb_link);
		facebook.setVerified(verified_fb);
		facebook.setActive(active_fb);
		facebookdao.save(facebook);

		// Get Tiktok form data
		boolean verified_tt = (boolean) requestParams.get("verified_tt");
		boolean active_tt = (boolean) requestParams.get("active_tt");
		String tt_link = (String) requestParams.get("tt_link");
		String tt_fans = (String) requestParams.get("tt_fans");
		String tt_hearts = (String) requestParams.get("tt_hearts");
		String tt_post_cost = (String) requestParams.get("tt_post_cost");
		// Save Tiktok data
		Tiktok tiktok = new Tiktok();
		tiktok.setInfluencer_id(influencer_id.longValue());
		tiktok.setFan(tt_fans);
		tiktok.setHearts(tt_hearts);
		tiktok.setPost_cost(tt_post_cost);
		tiktok.setLink(tt_link);
		tiktok.setVerified(verified_tt);
		tiktok.setActive(active_tt);
		tiktokdao.save(tiktok);

		map.put("status", "success");
		map.put("message", "Influencer created successfully");
		return map;

	}
	
	@PostMapping("/influencer-list")
	public  Map<String, Object> list(@RequestBody Map<String, Object> requestParams){
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");
		
		List<Influancer> influencerList = influncerdao.list();		
		if(influencerList.size() > 0) {
			map.put("status", "success");
			map.put("message", "fetching list success");
			map.put("list", influencerList);
		}else {
			map.put("status", "error");
			map.put("message", "");
			map.put("list", influencerList);
		}
		
		return map;		
	}
	
	@PostMapping("/get-influencer")
    public  Map<String, Object> get(@RequestBody Map<String, Object> requestParams){
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");
		
		String id = (String) requestParams.get("id");
		
		Influancer influencer = influncerdao.get(Long.parseLong(id));
		if(influencer==null) {
			map.put("status", "error");
			map.put("message", "influencer not found");
			return map;
		}
		
		map.put("status", "success");
		map.put("message", "influencer found");
		map.put("influencer", influencer);
		
		return map;		
	}
	
}
