package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;

import boomlet.app.data.Blog;

public interface BlogDAO {	
	public BigInteger save(Blog blog);
	public void update(Blog blog,long id);
	public void delete(long id);
	public List<Blog> list();
	public Blog get(long id);
}
