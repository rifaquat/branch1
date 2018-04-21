package com.vms.ws.mvc.services;

import com.vms.ws.config.ApplicationConfig;
import com.vms.ws.model.User;
import com.vms.ws.repository.UserRepository;
import com.vms.ws.util.CommonUtility;
import com.vms.ws.validation.validators.UserNameValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by LocationGuru on 27-05-2017.
 */
@Service
public class UserService implements UserNameValidator {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ApplicationConfig config;

    @Autowired
    CommonUtility commonUtility;

    public User validateUser(String username, String password, Long roleId) {
        password = commonUtility.encryptData(password, config.getPasswordSecretKey());
        if (roleId == null)
            return userRepository.validateUser(username, password);
        else
            return userRepository.validateUser(username, password, roleId);
    }

    /*public User validateByDriverIdAndPassword(Long driverId, String password) {
        return userRepository.validate(driverId, password);
    }*/

    @Transactional
    public void save(User user) {
        user.setPassword(commonUtility.encryptData(user.getPrimaryContactNumber().toString(), config.getPasswordSecretKey()));
        userRepository.save(user);
    }

    public void update(User user) {
        userRepository.save(user);
    }

    @Override
    public boolean isUserNameExists(String username) {
        if (userRepository.countByUsername(username) > 0) {
            return false;
        }
        return true;
    }

    public User findUseById(Long id) {
        return userRepository.findOne(id);
    }


    public Page<User> findAll(Pageable pageable,List<Long> roles ) {
        return userRepository.findAll(pageable,roles);
    }

    public Page<User> findAll(Pageable pageable,String searchBy,List<Long> roles ) {
        return userRepository.findAll(pageable,searchBy, roles);
    }

    public List<User> findAll(Long roleId) {
        if (null == roleId) {
            return userRepository.findAll();
        }
        return userRepository.findAll(roleId);
    }


}