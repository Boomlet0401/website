package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import boomlet.app.dao.BlogDAO;
import boomlet.app.data.Blog;

public class BlogImpl implements BlogDAO{
	
	private final String table_name = "blog";

	JdbcTemplate jdbcTemplate;

	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Blog blog) {
		final String sql = "INSERT INTO " + table_name
				+ " (influencer_id,link,page_views,article_cost,active) VALUES(?,?,?,?,?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setLong(1, blog.getInfluencer_id());
				ps.setString(2, blog.getLink());
				ps.setString(3, blog.getPage_views());
				ps.setString(4, blog.getArticle_cost());
				ps.setBoolean(5, blog.isActive());							
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}

	@Override
	public void update(Blog blog, long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(long id) {
		String sql = "DELETE FROM "+table_name+" WHERE influencer_id = " + id;		
		jdbcTemplate.update(sql);
	}

	@Override
	public List<Blog> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Blog get(long id) {
		String sql = "SELECT * FROM "+table_name+" WHERE influencer_id= " + id;		
		Blog blog;		
		try {
			blog = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Blog.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return blog;
	}

}
