package boomlet.web.controller;

import java.math.BigInteger;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;
import boomlet.app.dao.BlogDAO;
import boomlet.app.dao.DisclaimerDAO;
import boomlet.app.dao.FacebookDAO;
import boomlet.app.dao.InfluancerDAO;
import boomlet.app.dao.InstagramDAO;
import boomlet.app.dao.LinkedinDAO;
import boomlet.app.dao.ProposalDAO;
import boomlet.app.dao.TiktokDAO;
import boomlet.app.dao.TwitterDAO;
import boomlet.app.dao.UpdateInfluencerDAO;
import boomlet.app.dao.UserDAO;
import boomlet.app.dao.UserTokenDAO;
import boomlet.app.dao.YoutubeDAO;
import boomlet.app.data.Blog;
import boomlet.app.data.Disclaimer;
import boomlet.app.data.Facebook;
import boomlet.app.data.Influancer;
import boomlet.app.data.Instagram;
import boomlet.app.data.Linkedin;
import boomlet.app.data.Proposal;
import boomlet.app.data.Tiktok;
import boomlet.app.data.Twitter;
import boomlet.app.data.UpdateInfluencer;
import boomlet.app.data.User;
import boomlet.app.data.Youtube;
import boomlet.web.service.AccessChecker;

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

	@Autowired
	YoutubeDAO youtubedao;

	@Autowired
	ProposalDAO proposaldao;

	@Autowired
	UpdateInfluencerDAO updateInfluencerdao;

	@Autowired
	UserDAO userdao;

	@Autowired
	UserTokenDAO usertokendao;

	@Autowired
	DisclaimerDAO disclaimerdao;

	// create-influencer
	@SuppressWarnings("unchecked")
	@PostMapping("/create-influencer")
	public Map<String, Object> createInfluncer(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		if (!accessChecker.isAccess()) {
			Map<String, Object> response = accessChecker.getResponse();
			Map<String, String> error = new HashMap<String, String>();
			response.put("ferror", error);
			return response;
		}

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
		
		ArrayList<String> selectedCountries = (ArrayList<String>) requestParams.get("selectedCountries");
		ArrayList<String> selectedStates = (ArrayList<String>) requestParams.get("selectedState");
		ArrayList<String> selectedCities = (ArrayList<String>) requestParams.get("selectedCity");
		
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
		if (selectedCountries == null || selectedCountries.size() == 0) {
			error.put("countries", "Please select country");
			validation = true;
		}
		if (selectedStates == null || selectedStates.size() == 0) {
			error.put("states", "Please select state");
			validation = true;
		}
		if (selectedCities == null || selectedCities.size() == 0) {
			error.put("cities", "Please select city");
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
		influancer.setAdded_by("admin");
		influancer.setAdded_by_id(42);
		influancer.setLast_update_date(new Date(Calendar.getInstance().getTimeInMillis()));

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
		blog.setPage_views(blog_page_view);
		blog.setArticle_cost(blog_article_cost);
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
		tiktok.setFans(tt_fans);
		tiktok.setHearts(tt_hearts);
		tiktok.setPost_cost(tt_post_cost);
		tiktok.setLink(tt_link);
		tiktok.setVerified(verified_tt);
		tiktok.setActive(active_tt);
		tiktokdao.save(tiktok);

		// Get Youtuve form data
		boolean verified_yt = (boolean) requestParams.get("verified_yt");
		String yt_link = (String) requestParams.get("yt_link");
		String yt_subscribers = (String) requestParams.get("yt_subscribers");
		String yt_video_cost = (String) requestParams.get("yt_video_cost");
		// Save Youtube data
		Youtube youtube = new Youtube();
		youtube.setInfluencer_id(influencer_id.longValue());
		youtube.setSubscribers(yt_subscribers);
		youtube.setVerified(verified_yt);
		youtube.setVideo_cost(yt_video_cost);
		youtube.setLink(yt_link);
		youtubedao.save(youtube);

		map.put("status", "success");
		map.put("message", "Influencer created successfully");
		return map;

	}

	// influencer-list
	@PostMapping("/influencer-list")
	public Map<String, Object> list(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		accessChecker.setPublisher(true);
		accessChecker.setEditor(true);
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		List<Influancer> influencerList = influncerdao.list();
		if (influencerList.size() > 0) {
			map.put("status", "success");
			map.put("message", "fetching list success");
			map.put("list", influencerList);
		} else {
			map.put("status", "error");
			map.put("message", "");
			map.put("list", influencerList);
		}

		return map;
	}

	// get-influencer
	@PostMapping("/get-influencer")
	public Map<String, Object> get(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		accessChecker.setPublisher(true);
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		String id = (String) requestParams.get("id");

		Influancer influencer = influncerdao.get(Long.parseLong(id));
		if (influencer == null) {
			map.put("status", "error");
			map.put("message", "influencer not found");
			return map;
		}

		// Get Social Profiles
		Blog blog = blogdao.get(Long.parseLong(id));
		Facebook facebook = facebookdao.get(Long.parseLong(id));
		Instagram instagram = instagramdao.get(Long.parseLong(id));
		Linkedin linkedin = linkedindao.get(Long.parseLong(id));
		Tiktok tiktok = tiktokdao.get(Long.parseLong(id));
		Twitter twitter = twitterdao.get(Long.parseLong(id));
		Youtube youtube = youtubedao.get(Long.parseLong(id));

		map.put("status", "success");
		map.put("message", "influencer found");
		map.put("influencer", influencer);
		map.put("blog", blog);
		map.put("facebook", facebook);
		map.put("instagram", instagram);
		map.put("linkedin", linkedin);
		map.put("tiktok", tiktok);
		map.put("twitter", twitter);
		map.put("youtube", youtube);

		return map;
	}

	// edit-influencer
	@PostMapping("/edit-influencer")
	public Map<String, Object> editInfluencer(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		String id = (String) requestParams.get("id");

		Influancer influencer = influncerdao.get(Long.parseLong(id));
		if (influencer == null) {
			map.put("status", "error");
			map.put("message", "influencer not found");
			return map;
		}

		// Get Social Profiles
		Blog blog = blogdao.get(Long.parseLong(id));
		Facebook facebook = facebookdao.get(Long.parseLong(id));
		Instagram instagram = instagramdao.get(Long.parseLong(id));
		Linkedin linkedin = linkedindao.get(Long.parseLong(id));
		Tiktok tiktok = tiktokdao.get(Long.parseLong(id));
		Twitter twitter = twitterdao.get(Long.parseLong(id));
		Youtube youtube = youtubedao.get(Long.parseLong(id));

		map.put("status", "success");
		map.put("message", "influencer found");
		map.put("influencer", influencer);
		map.put("blog", blog);
		map.put("facebook", facebook);
		map.put("instagram", instagram);
		map.put("linkedin", linkedin);
		map.put("tiktok", tiktok);
		map.put("twitter", twitter);
		map.put("youtube", youtube);

		return map;
	}

	// update-influencer
	@SuppressWarnings("unchecked")
	@PostMapping("/update-influencer")
	public Map<String, Object> updateInfluncer(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		if (!accessChecker.isAccess()) {
			Map<String, Object> response = accessChecker.getResponse();
			Map<String, String> error = new HashMap<String, String>();
			response.put("ferror", error);
			return response;
		}

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
		int influencer_id = (int) requestParams.get("influencer_id");

		// Get influencer
		Influancer getinfluencer = influncerdao.get(influencer_id);
		if (getinfluencer.isUpdate_request()) {
			map.put("status", "error");
			map.put("message", "OOPS! Previous updation approval is pending. Please wait or Contact Us.");
			map.put("ferror", error);
			return map;
		}

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
		influancer.setId(influencer_id);

//		BigInteger influencer_id = influncerdao.save(influancer);
//		if (!(influencer_id.longValue() > 0)) {
//			map.put("status", "error");
//			map.put("message", "Something wrong try again");
//			return map;
//		}

		// Get Linkedin form data
		boolean l_verified = (boolean) requestParams.get("l_verified");
		boolean l_active = (boolean) requestParams.get("l_active");
		String l_link = (String) requestParams.get("l_link");
		String l_connections = (String) requestParams.get("l_connections");
		String l_post_cost = (String) requestParams.get("l_post_cost");
		// Save Linkedin data
		Linkedin linkedin = new Linkedin();
		linkedin.setInfluencer_id(influencer_id);
		linkedin.setConnections(l_connections);
		linkedin.setLink(l_link);
		linkedin.setPost_cost(l_post_cost);
		linkedin.setVerified(l_verified);
		linkedin.setActive(l_active);
//		linkedindao.save(linkedin);

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
		instagram.setInfluencer_id(influencer_id);
		instagram.setFollowers(insta_followers);
		instagram.setStory_cost(insta_story_cost);
		instagram.setVideo_cost(insta_video_cost);
		instagram.setPost_cost(insta_post_cost);
		instagram.setLink(insta_link);
		instagram.setVerified(verified_insta);
		instagram.setActive(active_insta);
//		instagramdao.save(instagram);

		// Get Blog form data
		boolean active_blog = (boolean) requestParams.get("active_blog");
		String blog_link = (String) requestParams.get("blog_link");
		String blog_page_view = (String) requestParams.get("blog_page_view");
		String blog_article_cost = (String) requestParams.get("blog_article_cost");
		// Save Blog data
		Blog blog = new Blog();
		blog.setInfluencer_id(influencer_id);
		blog.setLink(blog_link);
		blog.setPage_views(blog_page_view);
		blog.setArticle_cost(blog_article_cost);
		blog.setActive(active_blog);
//		blogdao.save(blog);

		// Get Twitter form data
		boolean verified_tw = (boolean) requestParams.get("verified_tw");
		boolean active_tw = (boolean) requestParams.get("active_tw");
		String tw_link = (String) requestParams.get("tw_link");
		String tw_connections = (String) requestParams.get("tw_connections");
		String tw_post_cost = (String) requestParams.get("tw_post_cost");
		// Save Twitter data
		Twitter twiter = new Twitter();
		twiter.setInfluencer_id(influencer_id);
		twiter.setConnections(tw_connections);
		twiter.setLink(tw_link);
		twiter.setPost_cost(tw_post_cost);
		twiter.setVerified(verified_tw);
		twiter.setActive(active_tw);
//		twitterdao.save(twiter);

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
		facebook.setInfluencer_id(influencer_id);
		facebook.setFollowers(fb_followers);
		facebook.setStory_cost(fb_story_cost);
		facebook.setVideo_cost(fb_video_cost);
		facebook.setPost_cost(fb_post_cost);
		facebook.setLink(fb_link);
		facebook.setVerified(verified_fb);
		facebook.setActive(active_fb);
//		facebookdao.save(facebook);

		// Get Tiktok form data
		boolean verified_tt = (boolean) requestParams.get("verified_tt");
		boolean active_tt = (boolean) requestParams.get("active_tt");
		String tt_link = (String) requestParams.get("tt_link");
		String tt_fans = (String) requestParams.get("tt_fans");
		String tt_hearts = (String) requestParams.get("tt_hearts");
		String tt_post_cost = (String) requestParams.get("tt_post_cost");
		// Save Tiktok data
		Tiktok tiktok = new Tiktok();
		tiktok.setInfluencer_id(influencer_id);
		tiktok.setFans(tt_fans);
		tiktok.setHearts(tt_hearts);
		tiktok.setPost_cost(tt_post_cost);
		tiktok.setLink(tt_link);
		tiktok.setVerified(verified_tt);
		tiktok.setActive(active_tt);
//		tiktokdao.save(tiktok);

		// Get Youtuve form data
		boolean verified_yt = (boolean) requestParams.get("verified_yt");
		String yt_link = (String) requestParams.get("yt_link");
		String yt_subscribers = (String) requestParams.get("yt_subscribers");
		String yt_video_cost = (String) requestParams.get("yt_video_cost");
		// Save Youtube data
		Youtube youtube = new Youtube();
		youtube.setInfluencer_id(influencer_id);
		youtube.setSubscribers(yt_subscribers);
		youtube.setVerified(verified_yt);
		youtube.setVideo_cost(yt_video_cost);
		youtube.setLink(yt_link);
//		youtubedao.save(youtube);

		// Prepare Data
		Map<String, Object> updateDate = new HashMap<String, Object>();
		updateDate.put("influencer", influancer);
		updateDate.put("blog", blog);
		updateDate.put("facebook", facebook);
		updateDate.put("instagram", instagram);
		updateDate.put("linkedin", linkedin);
		updateDate.put("tiktok", tiktok);
		updateDate.put("twitter", twiter);
		updateDate.put("youtube", youtube);

		UpdateInfluencer updateInfluencer = new UpdateInfluencer();
		updateInfluencer.setInfluencer_id(influencer_id);
		updateInfluencer.setData(gson.toJson(updateDate));
		updateInfluencer.setRequest_by("admin");
		updateInfluencer.setRequest_by_id(42);
		updateInfluencer.setStatus("update ruquest");

		BigInteger updateRequestId = updateInfluencerdao.save(updateInfluencer);
		if (!(updateRequestId.longValue() > 0)) {
			map.put("status", "error");
			map.put("message", "OOPS! Updated request failed try again");
			return map;
		}

		// Update Influencer
		// Upadte data
		influancer.setUpdated_by("admin");
		influancer.setUpdated_by_id(42);
		influancer.setUpdate_request(true);
		influancer.setUpdate_id(updateRequestId.longValue());
		long update = influncerdao.update(influancer, influencer_id);
		if (update > 0) {
			map.put("status", "success");
			map.put("message", "Update request submitted successfully. Please wait for approval");
			return map;
		} else {
			map.put("status", "error");
			map.put("message", "OOPS! Something wrong try again.");
			return map;
		}

	}

	// delete-influencer
	@PostMapping("/delete-influencer")
	public Map<String, Object> deleteInfluencer(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "Something Wrong");

		String id = (String) requestParams.get("id").toString();

		if (id == null) {
			map.put("status", "error");
			map.put("message", "Wrong id");
			return map;
		}

		// Delete ALL Social

		// Delete blog
		blogdao.delete(Long.parseLong(id));
		// Delete Facebook
		facebookdao.delete(Long.parseLong(id));
		// Delete Instagram
		instagramdao.delete(Long.parseLong(id));
		// Delete Linkedin
		linkedindao.delete(Long.parseLong(id));
		// Delete tiktok
		tiktokdao.delete(Long.parseLong(id));
		// Delete twitter
		twitterdao.delete(Long.parseLong(id));
		// Delete youtube
		youtubedao.delete(Long.parseLong(id));

		// Delete Influencer
		influncerdao.delete(Long.parseLong(id));

		map.put("status", "success");
		map.put("message", "influencer deleted");

		return map;
	}

	// create-proposal
	@SuppressWarnings({ "unchecked" })
	@PostMapping("/create-proposal")
	public Map<String, Object> createProposal(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		accessChecker.setPublisher(true);
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Proposal proposal = new Proposal();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		Map<String, String> error = new HashMap<String, String>();
		boolean validation = false;

		String dateString = (String) requestParams.get("proposal_date");

		Date proposal_date = null;
		// Check all Validation
		if (dateString == null || dateString.equalsIgnoreCase("")) {
			error.put("proposal_date", "Please enter proposal date");
			validation = true;
		} else {
			proposal_date = Date.valueOf(dateString);
		}

		String brand_agency = (String) requestParams.get("brand_agency");
		String brand_name = (String) requestParams.get("brand_name");
		String client = (String) requestParams.get("client");
		String client_name = (String) requestParams.get("client_name");
		String strategist = (String) requestParams.get("strategist");
		String contact_number = (String) requestParams.get("contact_number");
		String email_id = (String) requestParams.get("email_id");
		String influencer_category = (String) requestParams.get("influencer_category");
		String influencer_type = (String) requestParams.get("influencer_type");
		String plateform = (String) requestParams.get("plateform");
		String deliverables = (String) requestParams.get("deliverables");
		String co_ordinates = (String) requestParams.get("co_ordinates");
		String campaign_budget = (String) requestParams.get("campaign_budget");
		String campaign_duration = (String) requestParams.get("campaign_duration");
		String client_detail = (String) requestParams.get("client_detail");

		if (brand_agency == null || brand_agency.equalsIgnoreCase("")) {
			error.put("brand_agency", "Please enter brand/agency");
			validation = true;
		}

		if (brand_name == null || brand_name.equalsIgnoreCase("")) {
			error.put("brand_name", "Please enter brand name");
			validation = true;
		}		
		if (client == null || client.equalsIgnoreCase("")) {
			error.put("client", "Please select client");
			validation = true;
		}
		if (client_name == null || client_name.equalsIgnoreCase("")) {
			error.put("client_name", "Please enter client name");
			validation = true;
		}
		if (strategist == null || strategist.equalsIgnoreCase("")) {
			error.put("strategist", "Please enter strategist");
			validation = true;
		}
		if (contact_number == null || contact_number.equalsIgnoreCase("")) {
			error.put("contact_number", "Please enter contact number");
			validation = true;
		}
		if (email_id == null || email_id.equalsIgnoreCase("")) {
			error.put("email_id", "Please enter email");
			validation = true;
		}
		if (influencer_category == null || influencer_category.equalsIgnoreCase("")) {
			error.put("influencer_category", "Please enter influencer category");
			validation = true;
		}
		if (influencer_type == null || influencer_type.equalsIgnoreCase("")) {
			error.put("influencer_type", "Please enter influencer type");
			validation = true;
		}
		if (plateform == null || plateform.equalsIgnoreCase("")) {
			error.put("plateform", "Please enter plateform");
			validation = true;
		}
		if (deliverables == null || deliverables.equalsIgnoreCase("")) {
			error.put("deliverables", "Please enter deliverables");
			validation = true;
		}
		if (co_ordinates == null || co_ordinates.equalsIgnoreCase("")) {
			error.put("co_ordinates", "Please enter co-ordinates");
			validation = true;
		}
		if (campaign_budget == null || campaign_budget.equalsIgnoreCase("")) {
			error.put("campaign_budget", "Please enter campaign budget");
			validation = true;
		}
		if (campaign_duration == null || campaign_duration.equalsIgnoreCase("")) {
			error.put("campaign_duration", "Please enter campaign duration");
			validation = true;
		}
		if (client_detail == null || client_detail.equalsIgnoreCase("")) {
			error.put("client_detail", "Please enter client detail");
			validation = true;
		}

		// Check all Validation
		if (validation) {
			map.put("ferror", error);
			return map;
		} else {
			map.put("ferror", error);
		}

		ArrayList<Object> youtubeColumns = (ArrayList<Object>) requestParams.get("youtubeColumns");
		ArrayList<Object> blogColumns = (ArrayList<Object>) requestParams.get("blogColumns");
		ArrayList<Object> facebookColumns = (ArrayList<Object>) requestParams.get("facebookColumns");
		ArrayList<Object> instagramColumns = (ArrayList<Object>) requestParams.get("instagramColumns");
		ArrayList<Object> linkedinColumns = (ArrayList<Object>) requestParams.get("linkedinColumns");
		ArrayList<Object> tiktokColumns = (ArrayList<Object>) requestParams.get("tiktokColumns");
		ArrayList<Object> twitterColumns = (ArrayList<Object>) requestParams.get("twitterColumns");

		ArrayList<Object> influencerDetailLinkedin = (ArrayList<Object>) requestParams.get("influencerDetailLinkedin");
		ArrayList<Object> influencerDetailInstagram = (ArrayList<Object>) requestParams
				.get("influencerDetailInstagram");
		ArrayList<Object> influencerDetailBlog = (ArrayList<Object>) requestParams.get("influencerDetailBlog");
		ArrayList<Object> influencerDetailTwitter = (ArrayList<Object>) requestParams.get("influencerDetailTwitter");
		ArrayList<Object> influencerDetailFacebook = (ArrayList<Object>) requestParams.get("influencerDetailFacebook");
		ArrayList<Object> influencerDetailTiktok = (ArrayList<Object>) requestParams.get("influencerDetailTiktok");
		ArrayList<Object> influencerDetailYoutube = (ArrayList<Object>) requestParams.get("influencerDetailYoutube");

		ArrayList<Object> influencerAnalysis = (ArrayList<Object>) requestParams.get("influencerAnalysis");
		
		String statisticsSocialReach = (String) requestParams.get("statisticsSocialReach");
		String statisticsEstimatedEngagement = (String) requestParams.get("statisticsEstimatedEngagement");
		String statisticsEstimatedEngagementPrice = (String) requestParams.get("statisticsEstimatedEngagementPrice");
		String statisticsMale = (String) requestParams.get("statisticsMale");
		String statisticsFemale = (String) requestParams.get("statisticsFemale");
		
		ArrayList<Object> disclaimers = (ArrayList<Object>) requestParams.get("disclaimers");

		boolean checkInfluencerAdd = false;

		if (influencerDetailLinkedin != null && influencerDetailLinkedin.size() > 0) {
			checkInfluencerAdd = true;
		} else if (influencerDetailInstagram != null && influencerDetailInstagram.size() > 0) {
			checkInfluencerAdd = true;
		} else if (influencerDetailBlog != null && influencerDetailBlog.size() > 0) {
			checkInfluencerAdd = true;
		} else if (influencerDetailTwitter != null && influencerDetailTwitter.size() > 0) {
			checkInfluencerAdd = true;
		} else if (influencerDetailFacebook != null && influencerDetailFacebook.size() > 0) {
			checkInfluencerAdd = true;
		} else if (influencerDetailTiktok != null && influencerDetailTiktok.size() > 0) {
			checkInfluencerAdd = true;
		} else if (influencerDetailYoutube != null && influencerDetailYoutube.size() > 0) {
			checkInfluencerAdd = true;
		} else if (influencerAnalysis != null && influencerAnalysis.size() > 0) {
			checkInfluencerAdd = true;
		}

		if (!checkInfluencerAdd) {
			map.put("status", "error");
			map.put("message", "Please select atleast one influencer");
			return map;
		}

		Gson gson = new Gson();

		// Set Influencer Data
		proposal.setProposal_date(proposal_date);
		proposal.setBrand_agency(brand_agency);
		proposal.setBrand_name(brand_name);
		proposal.setClient(Long.parseLong(client));
		proposal.setClient_name(client_name);
		proposal.setStrategist(strategist);
		proposal.setContact_number(contact_number);
		proposal.setEmail_id(email_id);
		proposal.setInfluencer_category(influencer_category);
		proposal.setInfluencer_type(influencer_type);
		proposal.setPlateform(plateform);
		proposal.setDeliverables(deliverables);
		proposal.setCo_ordinates(co_ordinates);
		proposal.setCampaign_budget(campaign_budget);
		proposal.setCampaign_duration(campaign_duration);
		proposal.setClient_detail(client_detail);
		proposal.setAdded_by(accessChecker.getUser().getName());
		proposal.setAdded_by_id(accessChecker.getUser().getId());

		proposal.setApproved(false);

		proposal.setYoutubeColumns(gson.toJson(youtubeColumns));
		proposal.setBlogColumns(gson.toJson(blogColumns));
		proposal.setFacebookColumns(gson.toJson(facebookColumns));
		proposal.setInstagramColumns(gson.toJson(instagramColumns));
		proposal.setLinkedinColumns(gson.toJson(linkedinColumns));
		proposal.setTiktokColumns(gson.toJson(tiktokColumns));
		proposal.setTwitterColumns(gson.toJson(twitterColumns));

		proposal.setInfluencerDetailLinkedin(gson.toJson(influencerDetailLinkedin));
		proposal.setInfluencerDetailInstagram(gson.toJson(influencerDetailInstagram));
		proposal.setInfluencerDetailBlog(gson.toJson(influencerDetailBlog));
		proposal.setInfluencerDetailTwitter(gson.toJson(influencerDetailTwitter));
		proposal.setInfluencerDetailFacebook(gson.toJson(influencerDetailFacebook));
		proposal.setInfluencerDetailTiktok(gson.toJson(influencerDetailTiktok));
		proposal.setInfluencerDetailYoutube(gson.toJson(influencerDetailYoutube));

		proposal.setInfluencerAnalysis(gson.toJson(influencerAnalysis));		
		
		proposal.setStatisticsSocialReach(statisticsSocialReach);
		proposal.setStatisticsEstimatedEngagement(statisticsEstimatedEngagement);
		proposal.setStatisticsEstimatedEngagementPrice(statisticsEstimatedEngagementPrice);
		proposal.setStatisticsMale(statisticsMale);
		proposal.setStatisticsFemale(statisticsFemale);
		
		proposal.setDisclaimers(gson.toJson(disclaimers));

		BigInteger proposal_id = proposaldao.save(proposal);
		if (!(proposal_id.longValue() > 0)) {
			map.put("status", "error");
			map.put("message", "Something wrong try again");
			return map;
		}

		map.put("status", "success");
		map.put("message", "Influencer created successfully");
		return map;

	}

	// get-proposals
	@PostMapping("/get-proposals")
	public Map<String, Object> getProposals(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		accessChecker.setPublisher(true);
		accessChecker.setClient(true);		
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		List<Proposal> proposalList;
		if(accessChecker.userHaveAdminAcceess) {
			proposalList = proposaldao.list();
		}else if(accessChecker.userHavePublisherAcceess) {
			proposalList = proposaldao.listForPublisher(accessChecker.getUser().getId());			
		}else if(accessChecker.userHaveClientAccess) {
			proposalList = proposaldao.listForClient(accessChecker.getUser().getId());			
		}else {
			proposalList = new ArrayList<Proposal>();
		}
		
		
		if (proposalList.size() > 0) {
			
		} 
		
		map.put("status", "success");
		map.put("message", "fetching list success");
		map.put("list", proposalList);

		return map;

	}

	// get-proposal
	@PostMapping("/get-proposal")
	public Map<String, Object> getProposal(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		accessChecker.setPublisher(true);
		accessChecker.setClient(true);	
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		String id = (String) requestParams.get("id");

		Proposal proposal = proposaldao.get(Long.parseLong(id));
		if (proposal == null) {
			map.put("status", "error");
			map.put("message", "Proposal not found");
			return map;
		}

		map.put("status", "success");
		map.put("message", "Proposal found");
		map.put("proposal", proposal);

		return map;

	}

	// GET ALL USERS
	@PostMapping("/get-users")
	public Map<String, Object> getUsers(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		accessChecker.setPublisher(true);		
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		List<User> userList = userdao.list();
		if (userList.size() > 0) {
			map.put("status", "success");
			map.put("message", "fetching list success");
			map.put("list", userList);
		} else {
			map.put("status", "error");
			map.put("message", "");
			map.put("list", userList);
		}

		return map;
	}

	// UPDATE USER SCOPS
	@PostMapping("/update-userscops")
	public Map<String, Object> updateUserScops(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		Map<String, String> error = new HashMap<String, String>();
		boolean validation = false;

		boolean administrator = (boolean) requestParams.get("administrator");
		boolean contentEditor = (boolean) requestParams.get("contentEditor");
		boolean contentPublisher = (boolean) requestParams.get("contentPublisher");
		boolean campaignManager = (boolean) requestParams.get("campaignManager");
		String selectedUserId = (String) requestParams.get("selectedUserId").toString();

		if (validation) {
			map.put("ferror", error);
			return map;
		} else {
			map.put("ferror", error);
		}

		if (selectedUserId.equalsIgnoreCase("")) {
			map.put("status", "error");
			map.put("message", "OOPS! Invalid user");
			return map;
		}

		if (!administrator && !contentEditor && !contentPublisher && !campaignManager) {
			map.put("status", "error");
			map.put("message", "Please select at least one scope");
			return map;
		}

		User user = new User();
		String scops = "";

		if (administrator) {
			scops += "admin";
		} else {
			if (contentEditor) {
				scops += "content-editor,";
			}
			if (contentPublisher) {
				scops += "content-publisher,";
			}
			if (campaignManager) {
				scops += "campaign-manager,";
			}
		}

		if (scops.equalsIgnoreCase("")) {
			map.put("status", "error");
			map.put("message", "Please select at least one scope");
			return map;
		}

		user.setScops(scops);
		long userId = Long.parseLong(selectedUserId);

		long update = userdao.update(user, userId);

		if (update > 0) {
			map.put("status", "success");
			map.put("message", "User scops updated successfully");
			return map;
		} else {
			map.put("status", "error");
			map.put("message", "OOPS! Something wrong try again");
			return map;
		}

	}

	// Active -- Inactive User
	@PostMapping("/active-inactive-user")
	public Map<String, Object> activeInactiveUser(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		Map<String, String> error = new HashMap<String, String>();
		boolean validation = false;
		String selectedUserId = (String) requestParams.get("selectedUserId").toString();

		if (validation) {
			map.put("ferror", error);
			return map;
		} else {
			map.put("ferror", error);
		}

		if (selectedUserId.equalsIgnoreCase("")) {
			map.put("status", "error");
			map.put("message", "OOPS! Invalid user");
			return map;
		}

		User user = userdao.getById(Long.parseLong(selectedUserId));

		if (user == null) {
			map.put("status", "error");
			map.put("message", "OOPS! Invalid user");
			return map;
		}

		user.setActive(!user.isActive());

		long update = userdao.activeInactive(user, user.getId());
		if (update > 0) {
			map.put("status", "success");
			map.put("message", "User Activated successfully");
			map.put("active", user.isActive());
			return map;
		} else {
			map.put("status", "error");
			map.put("message", "OOPS! Something wrong try again");
			return map;
		}

	}

	// Get Disclaimer
	@PostMapping("/get-disclaimer")
	public Map<String, Object> getDisclaimer(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		accessChecker.setPublisher(true);
		accessChecker.setClient(true);	
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		List<Disclaimer> disclaimerList = disclaimerdao.list();
		if (disclaimerList.size() > 0) {
			map.put("status", "success");
			map.put("message", "fetching list success");
			map.put("list", disclaimerList);
		} else {
			map.put("status", "error");
			map.put("message", "");
			map.put("list", disclaimerList);
		}

		return map;
	}

	// Add Disclaimer
	@PostMapping("/add-disclaimer")
	public Map<String, Object> addDisclaimer(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {

		AccessChecker accessChecker = new AccessChecker(requestHeader, userdao, usertokendao);
		accessChecker.setPublisher(true);
		if (!accessChecker.isAccess()) {
			return accessChecker.getResponse();
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");

		String disclaimerText = (String) requestParams.get("disclaimer");
		// Check all Validation
		if (disclaimerText == null || disclaimerText.equalsIgnoreCase("")) {
			map.put("status", "error");
			map.put("message", "Please enter disclaimer");
		}

		Disclaimer disclaimer = new Disclaimer();

		disclaimer.setDetail(disclaimerText);

		BigInteger influencer_id = disclaimerdao.save(disclaimer);
		if (influencer_id.longValue() > 0) {
			map.put("status", "success");
			map.put("message", "Disclaimer added successfully");
			map.put("id", influencer_id.longValue());
			return map;
		} else {
			map.put("status", "error");
			map.put("message", "Something wrong try again");
			return map;
		}

	}
	
	@PostMapping("/add-employee")
	public Map<String, Object> addEmployee(@RequestBody Map<String, Object> requestParams) {
		
		User user = new User();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");
		
		Map<String, String> error = new HashMap<String, String>();

		String name = (String) requestParams.get("name");
		String email = (String) requestParams.get("email");		
		String mobile = (String) requestParams.get("mobile");

		if (name == null || name.equalsIgnoreCase("")) {
			error.put("name", "Please enter name");
			map.put("ferror", error);
			return map;
		} else {
			user.setName(name);
		}

		if (email == null || email.equalsIgnoreCase("")) {
			error.put("email", "Please enter email address");
			map.put("ferror", error);
			return map;
		} else {
			user.setEmail(email);
		}

		if (mobile == null || mobile.equalsIgnoreCase("")) {
			error.put("mobile", "Please enter mobile number");
			map.put("ferror", error);
			return map;
		} else {
			user.setMobile(mobile);
		}

		user.setPass("123456");
		
		User oldUser = new User();

		// Check Email
		oldUser = userdao.get(user.getEmail());
		if (oldUser != null) {
			error.put("email", "email already registered");
			map.put("ferror", error);
			return map;
		}

		// Check Mobile
		oldUser = userdao.getByMobile(user.getMobile());
		if (oldUser != null) {
			error.put("mobile", "mobile number already registered");
			map.put("ferror", error);
			return map;
		}
		
		map.put("ferror", error);		

		long id = userdao.save(user);
		if(id > 0) {			
			map.put("status", "success");
			map.put("message", "Employee added successfully");
			return map;
		}else {
			map.put("status", "error");
			map.put("message", "OOPS! Something wrong");
			return map;
		}
		
		
	}

}
