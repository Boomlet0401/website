package boomlet.app.dao;

import java.util.List;

import boomlet.app.data.Countries;

public interface CountriesDAO {
	public Countries get(long id);
	public List<Countries> list();
}

