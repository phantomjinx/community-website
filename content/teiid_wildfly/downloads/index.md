---
bref: ""
draft: false
menu:
  sidenav:
    name: Downloads (TW)
    weight: -278
    parent: Teiid Wildfly
sidebar: sidenav
title: "Teiid Wildfly Downloads"
toc: true
weight: 10
---

---

## Runtime

---

### **Latest**
- **Version 10.1.2**
  - [**Teiid Runtime**](https://oss.sonatype.org/service/local/repositories/releases/content/org/teiid/teiid/10.1.2/teiid-10.1.2-wildfly-dist.zip) [(with Wildfly/Console)](https://oss.sonatype.org/service/local/repositories/releases/content/org/teiid/teiid/10.1.2/teiid-10.1.2-wildfly-server.zip)
  - [**Teiid AdminShell**](https://oss.sonatype.org/service/local/repositories/releases/content/org/teiid/teiid/10.1.2/teiid-10.1.2-adminshell-dist.zip)
  - [**JDBC Driver**](https://oss.sonatype.org/service/local/repositories/releases/content/org/teiid/teiid/10.1.2/teiid-10.1.2-jdbc.jar)
  - [**Teiid Source**](https://oss.sonatype.org/service/local/repositories/releases/content/org/teiid/teiid/10.1.2/teiid-10.1.2-src.zip)
  - [**Release Notes/Change Log**](http://docs.jboss.org/teiid/10.1.0/teiid-releasenotes.html)
  - [**Teiid Web Console**](https://repository.jboss.org/nexus/service/local/repositories/releases/content/org/jboss/teiid/hal/dist/3.0.1/dist-3.0.1-overlay.zip)

### **Unstable**
- **Version 10.2 SNAPSHOT**
  - [**Teiid Runtime**](https://oss.sonatype.org/local/artifact/maven/redirect?r=snapshots&g=org/teiid&a=teiid&v=LATEST&c=wildfly-dist&e=zip) [(with Wildfly/Console)](https://oss.sonatype.org/service/local/repositories/releases/content/org/teiid/teiid/10.1.2/teiid-10.1.2-wildfly-server.zip)
  - [**Teiid AdminShell**](https://oss.sonatype.org/local/artifact/maven/redirect?r=snapshots&g=org/teiid&a=teiid&v=LATEST&c=adminshell-dist&e=zip)
  - [**JDBC Driver**](https://oss.sonatype.org/local/artifact/maven/redirect?r=snapshots&g=org/teiid&a=teiid&v=LATEST&c=jdbc)
  - [**Teiid Source**](https://oss.sonatype.org/local/artifact/maven/redirect?r=snapshots&g=org/teiid&a=teiid&v=LATEST&c=src&e=zip)
  - [**Release Notes/Change Log**](https://issues.jboss.org/secure/ReleaseNote.jspa?version=12336552&projectId=12310782)
  - [**Teiid Web Console**](https://repository.jboss.org/nexus/service/local/repositories/releases/content/org/jboss/teiid/hal/dist/3.0.1/dist-3.0.1-overlay.zip)

---

<span style="color:red">**IMPORTANT NOTE: Teiid is targeted to specific platforms**. See more below</span>.

#### Maven

You may also directly reference the Teiid artifacts from the download table above from the Maven Central Repository.

**Note:** Releases prior to 10.0 should use the JBoss Public Maven Repository - http://repository.jboss.org/nexus/content/groups/public/ and the org.jboss.teiid group instead.

- http://repository.jboss.org/nexus/content/groups/public/org/teiid/
- https://mvnrepository.com/artifact/org.jboss.teiid

**Note:** Releases prior to 10.1 use the -Final suffix for the initial release 10.0.0-Final, 9.3.0-Final, etc.

#### JDBC Driver

```xml
<pre class="code"><dependency>
  <groupId>org.teiid</groupId>
  <artifactId>teiid</artifactId>
  <classifier>jdbc</classifier>
  <version>X.X.X</version>
</dependency></pre>
```

#### Server Distribution

```xml
<pre class="code"><dependency>
  <groupId>org.teiid</groupId>
  <artifactId>teiid</artifactId>
  <classifier>wildfly-server</classifier>
  <version>X.X.X</version>
  <type>zip</type>
</dependency></pre>
```
---

### Embedding

You should use maven to directly control what features you need when embedding Teiid. See:  

- [**Teiid Spring Boot**](https://github.com/teiid/teiid-spring-boot)  
- [**Teiid WildFly Swarm Examples - will be updated shortly**](https://github.com/teiid/wildfly-swarm-teiid-examples)  
- [**The Embedded Examples**](https://github.com/teiid/teiid-embedded-examples)

---

### Docker

Docker images of the combined WildFly/Teiid/Console runtime are available at [Docker Hub.](https://hub.docker.com/r/teiid/teiid/) These are base images from which you may layer in your modules and deployments.

---

### Installation

Please consult the respective Migration Guides [**from 8.x to 9.x**](https://teiid.gitbooks.io/documents/content/admin/Migration_Guide_From_Teiid_8.x.html) and [**from 9.x to 10.x.**](https://teiid.gitbooks.io/documents/content/admin/Migration_Guide_From_Teiid_9.x.html)

Teiid Requires:

- [**JRE**](http://www.java.com/en/download/manual.jsp)
  - Java 1.8 for Teiid 9.1+
- [**WildFly**](http://wildfly.org/downloads/)
  - WildFly 11.0.0.CR1 for Teiid 10.0.0.Beta2+
  - WildFly 10.0.0 for Teiid 9.1 - 10.0.0.Beta1

Optional:

 -[**Teiid Designer**](../designer_downloads/designer_downloads) for creation of VDBs in a modeling environment. Note that Teiid Designer currently works with only Teiid 9.0 and earlier.


For complete installation instructions please refer to "Administrator's Guide" in [Teiid Documents section](../docs/index.html).

For Quick "standalone" mode installation of the latest Teiid

Either start by unzip the kit above that includes EAP or:

1.  Install the appropriate WildFly / EAP version (see above).
2.  UnZip Teiid archive over the installed application server

Then start the server using "standalone.sh -c standalone-teiid.xml" command.

Additionally you'll need to supply any third-party jars needed to connect to your enterprise sources like JDBC Drivers.

Teiid JDBC Driver  `teiid-<version>-jdbc.jar`  can be downloaded from above links for accessing a VDB through JDBC.

Follow the [quick start](https://docs.jboss.org/author/display/teiidexamples/Home) and the [Teiid Designer documentation](https://www.jboss.org/community/wiki/TheTeiidDesignerProject) to understand how to create a VDB.  Use and contribute to the [Teiid community](https://developer.jboss.org/en/teiid/overview) for additional examples and configuration options for Teiid.

---

## Tooling

---

### **Teiid Designer**

#### Latest Release  11.1.2 Final - February 19th, 2018

*   [**Update Site**](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.2.Final/) -  (See installation instructions at the bottom of this page)
*   [**Download**](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.2.Final/jbosstools-teiid-designer-11.1.2.Final-updatesite.zip)
*   Compatible with [**Teiid 9.0**](http://teiid.jboss.org/downloads/) and earlier releases
*   Compatible with [**JBDS 11**](http://developers.redhat.com/products/devstudio/download/) releases
*   Download Eclipse distro - [**Eclipse 4.7 (Oxygen)**](http://www.eclipse.org/oxygen/) 

---

#### Stable 11.x Releases 

- **Version 11.1.2** - Released: 2/19/2018 - [Release Notes](http://community.jboss.org/wiki/TeiidDesigner1112ReleaseNotes) - [User Guide](http://docs.jboss.org/teiid/designer/11.1.2/user-guide/html/)
  - [Update Site](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.2.Final/)
  - [ZIP](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.2.Final/jbosstools-teiid-designer-11.1.2.Final-updatesite.zip)
  - Compatible with [Teiid 9.0](http://teiid.jboss.org/downloads/) & [RHDS 11.1.0 GA](http://developers.redhat.com/products/devstudio/download/) & [Eclipse 4.7 Oxygen](http://www.eclipse.org/oxygen/)

- **Version 11.1.0** - Released: 9/7/2017 - [Release Notes](http://community.jboss.org/wiki/TeiidDesigner111ReleaseNotes) - [User Guide](http://docs.jboss.org/teiid/designer/11.1/user-guide/html/)
  - [Update Site](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.0.Final/)
  - [ZIP](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.0.Final/jbosstools-teiid-designer-11.1.0.Final-updatesite.zip) 
  - Compatible with [Teiid 9.0](http://teiid.jboss.org/downloads/) & [RHDS 11.0.0 GA](http://developers.redhat.com/products/devstudio/download/) & [Eclipse 4.7 Oxygen](http://www.eclipse.org/oxygen/) 


*   **Version 11.0.0** - Released: 12/5/2016 - [Release Notes](http://community.jboss.org/wiki/TeiidDesigner110ReleaseNotes) - [User Guide](http://docs.jboss.org/teiid/designer/11.0/user-guide/html/)
    *   [Update Site](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.0.0.Final/)
    *   [ZIP](https://sourceforge.net/projects/teiid/files/teiid-designer/11.0/teiid-designer-11.0.0.Final-v20161205-1706-B4115.zip/download/) 
    *   Compatible with [Teiid 9.0](http://teiid.jboss.org/downloads/) & [RHDS 10.0.0 GA](http://developers.redhat.com/products/devstudio/download/) & [Eclipse 4.6 Neon](http://www.eclipse.org/neon/)

---

#### Install into RH Developer Studio 11.x

*   Launch the **Help > Install New Software**** <span style="font-weight: normal">action</span>**
*   **Add...** the following update site URLs but **DO NOT** install them. Various dependent plugins required for Teiid Designer will be installed as needed. _M**<span style="font-weight: normal">ake sure “Contact all update sites during install to find required software” is checked.</span>**
    *   **[http://download.jboss.org/jbosstools/targetplatforms/jbtistarget/4.5.0.Final/jbtis/REPO/](http://download.jboss.org/jbosstools/targetplatforms/jbtistarget/4.5.0.Final/jbtis/REPO/)**
*   Install **Teiid Designer 11.1** via update site:
    *   [**http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.2.Final/**](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.2.Final/)
    *   Click **Install** button and continue through restarting **JBDS**

Install into Eclipse 4.7 (Oxygen)

*   Launch the **Help > Install New Software**** <span style="font-weight: normal">action</span>**
*   **Add...** the following update site URLs but **DO NOT install them**. Various dependent plugins required for Teiid Designer will be installed as needed. _M<span style="font-weight: normal">ake sure “Contact all update sites during install to find required software” is checked</span>_**_<span style="font-weight: normal">.</span>**
    *   **[http://download.jboss.org/jbosstools/targetplatforms/jbtistarget/4.5.0.Final/jbtis/REPO/](http://download.jboss.org/jbosstools/targetplatforms/jbtistarget/4.5.0.Final/jbtis/REPO/)**
    *   **[http://download.jboss.org/jbosstools/oxygen/stable/updates/](http://download.jboss.org/jbosstools/oxygen/stable/updates/)**
*   Install **Teiid Designer 11.1** via update site:
    *   **[http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.2.Final/](http://download.jboss.org/jbosstools/oxygen/stable/updates/integration-stack/teiiddesigner/11.1.2.Final/)**
    *   Click **Install** button and continue through restarting Eclipse

---

#### Install into RH Developer Studio 10.1

*   Launch the **Help > Install New Software**** <span style="font-weight: normal">action</span>**
*   **Add...** the following update site URLs but **DO NOT** install them. Various dependent plugins required for Teiid Designer will be installed as needed. _M**<span style="font-weight: normal">ake sure “Contact all update sites during install to find required software” is checked.</span>**
    *   **[http://download.jboss.org/jbosstools/targetplatforms/jbtistarget/4.4.1.CR1/jbtis/REPO](http://download.jboss.org/jbosstools/targetplatforms/jbtistarget/4.4.1.CR1/jbtis/REPO)**
*   Install **Teiid Designer 11.0** via update site:
    *   [**http://download.jboss.org/jbosstools/updates/release/neon/integration-stack/teiiddesigner/11.0.0.Final/**](http://download.jboss.org/jbosstools/updates/release/neon/integration-stack/teiiddesigner/11.0.0.Final/)
    *   Click **Install** button and continue through restarting **JBDS**

#### Install into Eclipse 4.6 (Neon)

*   Launch the **Help > Install New Software**** <span style="font-weight: normal">action</span>**
*   **Add...** the following update site URLs but **DO NOT install them**. Various dependent plugins required for Teiid Designer will be installed as needed. _M<span style="font-weight: normal">ake sure “Contact all update sites during install to find required software” is checked</span>_**_<span style="font-weight: normal">.</span>_**
    *   **[http://download.jboss.org/jbosstools/targetplatforms/jbtistarget/4.4.1.CR1/jbtis/REPO](http://download.jboss.org/jbosstools/targetplatforms/jbtistarget/4.4.1.CR1/jbtis/REPO)**
    *   **[http://download.jboss.org/jbosstools/neon/stable/updates/](http://download.jboss.org/jbosstools/neon/stable/updates/)**
*   Install **Teiid Designer 11.0** via update site:
    *   **[http://download.jboss.org/jbosstools/updates/release/neon/integration-stack/teiiddesigner/11.0.0.Final/](http://download.jboss.org/jbosstools/updates/release/neon/integration-stack/teiiddesigner/11.0.0.Final/)**
    *   Click **Install** button and continue through restarting Eclipse 
    
---