---
bref: ""
date: 2017-05-19T14:40:12+01:00
draft: false
menu:
  sidenav:
    name: Virtualization
    weight: -400
    parent: Quickstarts
sidebar: sidenav
title: "Virtualization Quickstart"
toc: true
weight: 20
---

**Virtualization Quickstart** > [Setup](./setup) > [Define a Data Service](./define-data-service) > [Access Data Service](./access-data-service)

**This "Teiid in the Cloud" quickstart demonstrates the virtualization of a data service**

**Goal**: A database instance exposed as OData.

<div>
  <a class="qstartblock" href="./setup">
    Setup
    <div class="qstartblock-content">
    <ul>
      <li>Install minishift</li>
      <li>Configure minishift with the following services</li>
      <ul>
        <li>PostgresSQL DB data service</li>
        <li>Beetle Studio / Teiid Runtime / Wildfly server</li>
      </ul>
    </ul>
    </div>
  </a>
</div>

<div>
  <a class="qstartblock" href="./define-data-service">
    Define a Data Service
    <div class="qstartblock-content">
    <ul>
      <li>Create a connection to the DB data service</li>
      <li>Create a virtualization of the connection</li>
      <li>Publish the virtualization</li>
    </ul>
    </div>
  </a>
</div>

<div>
  <a class="qstartblock" href="./access-data-service">
    Access the Data Service
    <div class="qstartblock-content">
    <ul>
      <li>Execute example OData queries and see results</li>
    </ul>
    </div>
  </a>
</div>
