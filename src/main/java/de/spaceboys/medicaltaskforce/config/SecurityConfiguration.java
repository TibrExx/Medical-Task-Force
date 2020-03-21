package de.spaceboys.medicaltaskforce.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@Slf4j
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Value("${oauth.enable}")
    private boolean oauthEnabeled;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        if(oauthEnabeled) {
            log.warn("Oauth is disabled");
        }
        if (oauthEnabeled) {
            http.authorizeRequests()
                    .anyRequest()
                    .authenticated()
                    .and()
                    .oauth2Login();
        }
    }
}
