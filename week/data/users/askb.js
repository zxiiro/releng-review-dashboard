userdata['askb'] = {
  "identity": ids["askb"],
  "reviewCountPlus2": 3,
  "reviewCountPlus1": 1,
  "reviewCountMinus1": 1,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1526587776000,
  "lastActiveDate": 1536854184000,
  "activeDayCount": 5,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Idf23a30b111dd922120fb6195d0411e2fc993dab",
      "commitNumber": 12550,
      "subject": "Use clouds.yaml for openstack packer builders",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12550",
      "commitMessage": "Use clouds.yaml for openstack packer builders\n\nSince packer version 1.2.5, packer now supports pulling openstack\nconfig from clouds.yaml. Let\u0027s consolidate to that file so that we\ndon\u0027t have duplicate configuration with the jobs that need the\nopenstack cli.\n\nIssue: RELENG-1205\nChange-Id: Idf23a30b111dd922120fb6195d0411e2fc993dab\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536710958000,
      "lastUpdatedDate": 1536854184000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["jwagantall"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1536710958000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536713179000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1536713269000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/320/ (1/2)"
        },
        {
          "timestamp": 1536713332000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/752/ (2/2)"
        },
        {
          "timestamp": 1536713475000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/320/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/320\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/752/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/752"
        },
        {
          "timestamp": 1536714378000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)\n\nReno some release notes please."
        },
        {
          "timestamp": 1536714823000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536714922000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/321/ (1/2)"
        },
        {
          "timestamp": 1536714980000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/753/ (2/2)"
        },
        {
          "timestamp": 1536715144000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/321/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/321\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/753/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/753"
        },
        {
          "timestamp": 1536719950000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1536719977000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3:\n\nLeaving it un merged since I would rather prefer a 2nd look from someone else."
        },
        {
          "timestamp": 1536763427000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1536763606000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1536763702000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536763814000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/322/ (1/2)"
        },
        {
          "timestamp": 1536763873000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/754/ (2/2)"
        },
        {
          "timestamp": 1536764055000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/322/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/322\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/754/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/754"
        },
        {
          "timestamp": 1536764268000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536854160000,
          "reviewer": ids["askb"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536854184000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "fa4b19658c52cc94ac45830a40f6db4ea0673cf3",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536710958000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 87,
              "reviewer": ids["zxiiro"],
              "message": "Downside this is we now require clouds-yaml even for non-openstack packer users.\n\nI wonder if we can somehow make this optional.",
              "patchSetTimestamp": 1536710958000
            }
          ],
          "sizeInsertions": 11,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d67d30eab6b845113244bd0be9ac85ce4efda8b3",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536713179000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536714378000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536713475000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "99edf245eb8f3b25633c3840eecbaa7f3b61e213",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536714823000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536763427000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536719950000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536715144000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 98,
              "reviewer": ids["agrimberg"],
              "message": "Maybe I\u0027m just being silly, but do we know that setting OS_CLOUD to something, when not building an openstack packer (that is openstack \u003d false) isn\u0027t going to cause packer to still try to look in the clouds file?\n\nPerhaps this specific inject should be moved into the conditional-step",
              "patchSetTimestamp": 1536714823000
            },
            {
              "file": "jjb/lf-macros.yaml",
              "line": 98,
              "reviewer": ids["zxiiro"],
              "message": "We can do that just to be safe and not over expose variables.",
              "patchSetTimestamp": 1536714823000
            }
          ],
          "sizeInsertions": 53,
          "sizeDeletions": -1
        },
        {
          "number": 4,
          "revision": "d8e3dc493b1ba8b5a462887c6fa90a51c86bedc2",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536763702000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536764268000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536854160000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536854184000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536764055000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 54,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0da9d6bb99a5a0a9666697b27416fa5e5518e316",
      "commitNumber": 12558,
      "subject": "Fix package list script to not fail on diff",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12558",
      "commitMessage": "Fix package list script to not fail on diff\n\nThe diff command exits 1 if there is a difference between 2 files.\nThis is perfectly valid so ignore the exit code for this command.\n\nChange-Id: I0da9d6bb99a5a0a9666697b27416fa5e5518e316\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536774646000,
      "lastUpdatedDate": 1536775978000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["askb"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536774646000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536774712000,
          "reviewer": ids["zxiiro"],
          "message": "Assignee added: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e"
        },
        {
          "timestamp": 1536774740000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536774949000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/755/"
        },
        {
          "timestamp": 1536775115000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/755/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/755"
        },
        {
          "timestamp": 1536775127000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        },
        {
          "timestamp": 1536775477000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1536775759000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1536775978000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "2b3cda5089750601fada2c62cf8d2f5d8050f513",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/58/12558/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536774646000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536775127000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536775978000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536774740000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536775115000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/package-listing.sh",
              "line": 53,
              "reviewer": ids["askb"],
              "message": "Does start and end packages guarantee sorted order? if not you should be sort both before passing it to diff.",
              "patchSetTimestamp": 1536774646000
            },
            {
              "file": "shell/package-listing.sh",
              "line": 53,
              "reviewer": ids["agrimberg"],
              "message": "It\u0027s guaranteed on RPM systems, dpkg (in all my testing) always listed things sorted so it\u0027s not passed to sort.\n\nSee lines 36 - 48. IIRC this script is called twice. Once at the start of the job, and once at the end. It\u0027s designed to be safely used that way.",
              "patchSetTimestamp": 1536774646000
            }
          ],
          "sizeInsertions": 7,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ie794636e49f97ff2ac2735e81c407b57a3470f55",
      "commitNumber": 10705,
      "subject": "Support recheck and reverify in global-jjb",
      "owner": ids["agardner"],
      "url": "https://gerrit.linuxfoundation.org/infra/10705",
      "commitMessage": "Support recheck and reverify in global-jjb\n\nIn OPNFV we are using reverify as a convention (we also support recheck)\nThis was previously deprecated in global-jjb\nBut I\u0027m adding it back to not confuse our users\n\nChange-Id: Ie794636e49f97ff2ac2735e81c407b57a3470f55\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
      "createdOnDate": 1526587776000,
      "lastUpdatedDate": 1536682204000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["bramwelt"],
        ids["askb"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1526587776000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526587957000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/443/"
        },
        {
          "timestamp": 1526588159000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/443/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/443"
        },
        {
          "timestamp": 1526596014000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1526597090000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review-2\n\nIs there any specific reason we cant use same notation across projects?"
        },
        {
          "timestamp": 1526597326000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\nchange LGTM! Added a -2 so that my comment gets some attention before it gets merged."
        },
        {
          "timestamp": 1526659121000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1:\n\n@Anil we have used reverify as a convention since our inception, I don\u0027t want to confuse users due to the switch to global jjb. I discussed with Andy in slack before creating this change."
        },
        {
          "timestamp": 1526838506000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)\n\nIf we merge this, we should update all of ODL\u0027s jobs to support both recheck and reverify too before upgrading to whichever version of global-jjb this lands in otherwise if someone types \"reverify\" in ODL they will only run global-jjb jobs and again cause confusion on the ODL side.\n\n(This was the reason we originally dropped reverify in ODL)\n\nHowever if we can ensure all the regexes are the same everywhere I don\u0027t see this as a problem.\n\nOne suggestion to use \u0027(recheck|reverify)$\u0027 as the search pattern, both reducing the number of lines added as well as makes it easier for folks who are copy pasting to get the full regex."
        },
        {
          "timestamp": 1526860683000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1529684819000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1529684973000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1529685078000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/602/"
        },
        {
          "timestamp": 1529685287000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/602/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/602"
        },
        {
          "timestamp": 1529761731000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1529848497000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1530302729000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1530302825000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/620/"
        },
        {
          "timestamp": 1530302973000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/620/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/620"
        },
        {
          "timestamp": 1530359807000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1530398819000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1530398852000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nUpdated to fix all instances of \n\n recheck$|^reverify to (recheck|reverify)"
        },
        {
          "timestamp": 1530398895000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/621/"
        },
        {
          "timestamp": 1530399062000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/621/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/621"
        },
        {
          "timestamp": 1531238824000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1531245097000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1531245173000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1531245387000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/628/"
        },
        {
          "timestamp": 1531245526000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/628/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/628"
        },
        {
          "timestamp": 1531245554000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review+2"
        },
        {
          "timestamp": 1531325687000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6: Patch Set 5 was rebased."
        },
        {
          "timestamp": 1531325768000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/631/"
        },
        {
          "timestamp": 1531325915000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/631/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/631"
        },
        {
          "timestamp": 1531334147000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 6: Code-Review+1"
        },
        {
          "timestamp": 1531495845000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 6: Code-Review+2"
        },
        {
          "timestamp": 1531495847000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1536682204000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "224139b46a9e9c7143cbc610f42371dd217b389c",
          "parents": [
            "aec2a0c78d8ca2d4ea9570cc249bbe55b33643f3"
          ],
          "ref": "refs/changes/05/10705/1",
          "uploader": ids["agardner"],
          "createdOnDate": 1526587776000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1526596014000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1526860683000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526588159000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "typo: global-jjb",
              "patchSetTimestamp": 1526587776000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 615,
              "reviewer": ids["zxiiro"],
              "message": "I believe this is regex so maybe we can do\n\n(recheck|reverify)$\n\nthat way if folks copy paste the regex they\u0027ll get both in the same call.",
              "patchSetTimestamp": 1526587776000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 615,
              "reviewer": ids["askb"],
              "message": "The verify jobs would be triggered resulting from the following comments:\n\n1. reverify\n2. recheck\n3. a comment line ending with reverify\n4. a comment line ending with recheck \n\nActual gerrit comment would look like:\n\n1. Patch Set 14: recheck\n2. Patch Set 15: reverify\n3. Patch Set 25: a comment line ending with reverify\n4. Patch Set 45: a comment line ending with recheck\n\nI tested the regex which handled all the about cases while it matches only for tests 1. and 2. So that only correct commands would retrigger the jobs.  \n\n^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify)$",
              "patchSetTimestamp": 1526587776000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 615,
              "reviewer": ids["zxiiro"],
              "message": "The annoying thing about this pattern \"^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify)$\"\n\nIs if you vote the message becomes:\n\n Patch Set 1: Code-Review+2\n \n recheck\n\nSo now we cannot vote and recheck on the same update.",
              "patchSetTimestamp": 1526587776000
            }
          ],
          "sizeInsertions": 18,
          "sizeDeletions": -6
        },
        {
          "number": 2,
          "revision": "cc4427298fe0ffca2cd5426432c36c8062f7cb6f",
          "parents": [
            "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
          ],
          "ref": "refs/changes/05/10705/2",
          "uploader": ids["agardner"],
          "createdOnDate": 1529684819000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529848497000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529685287000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 483,
              "reviewer": ids["zxiiro"],
              "message": "I think this pattern might be easier to manage if we ever decide to add a 3rd option: ^(recheck|reverify)$",
              "patchSetTimestamp": 1529684819000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 922,
              "reviewer": ids["zxiiro"],
              "message": "missing trialing $",
              "patchSetTimestamp": 1529684819000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 1039,
              "reviewer": ids["agardner"],
              "message": "Hmm. what do I do for this one?",
              "patchSetTimestamp": 1529684819000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 1039,
              "reviewer": ids["zxiiro"],
              "message": "Probably:\n\n ^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify): [0-9 ]+",
              "patchSetTimestamp": 1529684819000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        },
        {
          "number": 3,
          "revision": "a879eb4b083807a8db60dbac45621c988bac6d6e",
          "parents": [
            "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
          ],
          "ref": "refs/changes/05/10705/3",
          "uploader": ids["agardner"],
          "createdOnDate": 1530302729000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1530359807000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530302973000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        },
        {
          "number": 4,
          "revision": "d113e63c987519b0008aede3d1b7917e0ac9a227",
          "parents": [
            "5fbc7e5d91972c465b940e1ce0aa1e25d6b66e5e"
          ],
          "ref": "refs/changes/05/10705/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1530398819000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1531245097000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1531238824000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530399062000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-fetch-dependencies.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "On modern Linux we don\u0027t need to use egrep.\n\nhttps://unix.stackexchange.com/questions/17949/what-is-the-difference-between-grep-egrep-and-fgrep\n\nI think this should just be `grep -E` instead.",
              "patchSetTimestamp": 1530398819000
            },
            {
              "file": "shell/gerrit-fetch-dependencies.sh",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "I thin",
              "patchSetTimestamp": 1530398819000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        },
        {
          "number": 5,
          "revision": "280b57b4c2980930b6145d42d75feae7b353583b",
          "parents": [
            "dfb2c6ca52a4c885e42d6c2252706bd824c75068"
          ],
          "ref": "refs/changes/05/10705/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1531245173000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1531245554000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531245526000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        },
        {
          "number": 6,
          "revision": "a97f48ea67f1bd469d25ae816d7ba66786ecd68a",
          "parents": [
            "8f930852bc197279a3904c59dc315928d269c7bb"
          ],
          "ref": "refs/changes/05/10705/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1531325687000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1531495845000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1531495847000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1531334147000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531325915000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["agardner"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 2,
        "commentCount": 1,
        "approvals": {
          "-1": 1,
          "2": 1
        }
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 3,
        "commentCount": 1,
        "approvals": {
          "1": 1,
          "2": 2
        }
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Ie794636e49f97ff2ac2735e81c407b57a3470f55",
        "commitNumber": 10705,
        "subject": "Support recheck and reverify in global-jjb",
        "owner": ids["agardner"],
        "url": "https://gerrit.linuxfoundation.org/infra/10705",
        "commitMessage": "Support recheck and reverify in global-jjb\n\nIn OPNFV we are using reverify as a convention (we also support recheck)\nThis was previously deprecated in global-jjb\nBut I\u0027m adding it back to not confuse our users\n\nChange-Id: Ie794636e49f97ff2ac2735e81c407b57a3470f55\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
        "createdOnDate": 1526587776000,
        "lastUpdatedDate": 1536682204000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["agrimberg"],
          ids["zxiiro"],
          ids["agardner"],
          ids["bramwelt"],
          ids["askb"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1526587776000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1526587957000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/443/"
          },
          {
            "timestamp": 1526588159000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/443/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/443"
          },
          {
            "timestamp": 1526596014000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 1: Code-Review+2"
          },
          {
            "timestamp": 1526597090000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1: Code-Review-2\n\nIs there any specific reason we cant use same notation across projects?"
          },
          {
            "timestamp": 1526597326000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1:\n\nchange LGTM! Added a -2 so that my comment gets some attention before it gets merged."
          },
          {
            "timestamp": 1526659121000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 1:\n\n@Anil we have used reverify as a convention since our inception, I don\u0027t want to confuse users due to the switch to global jjb. I discussed with Andy in slack before creating this change."
          },
          {
            "timestamp": 1526838506000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(2 comments)\n\nIf we merge this, we should update all of ODL\u0027s jobs to support both recheck and reverify too before upgrading to whichever version of global-jjb this lands in otherwise if someone types \"reverify\" in ODL they will only run global-jjb jobs and again cause confusion on the ODL side.\n\n(This was the reason we originally dropped reverify in ODL)\n\nHowever if we can ensure all the regexes are the same everywhere I don\u0027t see this as a problem.\n\nOne suggestion to use \u0027(recheck|reverify)$\u0027 as the search pattern, both reducing the number of lines added as well as makes it easier for folks who are copy pasting to get the full regex."
          },
          {
            "timestamp": 1526860683000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1529684819000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1529684973000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1529685078000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/602/"
          },
          {
            "timestamp": 1529685287000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/602/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/602"
          },
          {
            "timestamp": 1529761731000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1529848497000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\n(2 comments)"
          },
          {
            "timestamp": 1530302729000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1530302825000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/620/"
          },
          {
            "timestamp": 1530302973000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/620/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/620"
          },
          {
            "timestamp": 1530359807000,
            "reviewer": ids["askb"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1530398819000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1530398852000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4:\n\nUpdated to fix all instances of \n\n recheck$|^reverify to (recheck|reverify)"
          },
          {
            "timestamp": 1530398895000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/621/"
          },
          {
            "timestamp": 1530399062000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/621/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/621"
          },
          {
            "timestamp": 1531238824000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 4: Code-Review+1"
          },
          {
            "timestamp": 1531245097000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
          },
          {
            "timestamp": 1531245173000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1531245387000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/628/"
          },
          {
            "timestamp": 1531245526000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/628/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/628"
          },
          {
            "timestamp": 1531245554000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5: Code-Review+2"
          },
          {
            "timestamp": 1531325687000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 6: Patch Set 5 was rebased."
          },
          {
            "timestamp": 1531325768000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/631/"
          },
          {
            "timestamp": 1531325915000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/631/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/631"
          },
          {
            "timestamp": 1531334147000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 6: Code-Review+1"
          },
          {
            "timestamp": 1531495845000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 6: Code-Review+2"
          },
          {
            "timestamp": 1531495847000,
            "reviewer": ids["agrimberg"],
            "message": "Change has been successfully merged by Andrew Grimberg"
          },
          {
            "timestamp": 1536682204000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "224139b46a9e9c7143cbc610f42371dd217b389c",
            "parents": [
              "aec2a0c78d8ca2d4ea9570cc249bbe55b33643f3"
            ],
            "ref": "refs/changes/05/10705/1",
            "uploader": ids["agardner"],
            "createdOnDate": 1526587776000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1526596014000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1526860683000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1526588159000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 10,
                "reviewer": ids["zxiiro"],
                "message": "typo: global-jjb",
                "patchSetTimestamp": 1526587776000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 615,
                "reviewer": ids["zxiiro"],
                "message": "I believe this is regex so maybe we can do\n\n(recheck|reverify)$\n\nthat way if folks copy paste the regex they\u0027ll get both in the same call.",
                "patchSetTimestamp": 1526587776000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 615,
                "reviewer": ids["askb"],
                "message": "The verify jobs would be triggered resulting from the following comments:\n\n1. reverify\n2. recheck\n3. a comment line ending with reverify\n4. a comment line ending with recheck \n\nActual gerrit comment would look like:\n\n1. Patch Set 14: recheck\n2. Patch Set 15: reverify\n3. Patch Set 25: a comment line ending with reverify\n4. Patch Set 45: a comment line ending with recheck\n\nI tested the regex which handled all the about cases while it matches only for tests 1. and 2. So that only correct commands would retrigger the jobs.  \n\n^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify)$",
                "patchSetTimestamp": 1526587776000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 615,
                "reviewer": ids["zxiiro"],
                "message": "The annoying thing about this pattern \"^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify)$\"\n\nIs if you vote the message becomes:\n\n Patch Set 1: Code-Review+2\n \n recheck\n\nSo now we cannot vote and recheck on the same update.",
                "patchSetTimestamp": 1526587776000
              }
            ],
            "sizeInsertions": 18,
            "sizeDeletions": -6
          },
          {
            "number": 2,
            "revision": "cc4427298fe0ffca2cd5426432c36c8062f7cb6f",
            "parents": [
              "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
            ],
            "ref": "refs/changes/05/10705/2",
            "uploader": ids["agardner"],
            "createdOnDate": 1529684819000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529848497000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529685287000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 483,
                "reviewer": ids["zxiiro"],
                "message": "I think this pattern might be easier to manage if we ever decide to add a 3rd option: ^(recheck|reverify)$",
                "patchSetTimestamp": 1529684819000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 922,
                "reviewer": ids["zxiiro"],
                "message": "missing trialing $",
                "patchSetTimestamp": 1529684819000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 1039,
                "reviewer": ids["agardner"],
                "message": "Hmm. what do I do for this one?",
                "patchSetTimestamp": 1529684819000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 1039,
                "reviewer": ids["zxiiro"],
                "message": "Probably:\n\n ^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify): [0-9 ]+",
                "patchSetTimestamp": 1529684819000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          },
          {
            "number": 3,
            "revision": "a879eb4b083807a8db60dbac45621c988bac6d6e",
            "parents": [
              "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
            ],
            "ref": "refs/changes/05/10705/3",
            "uploader": ids["agardner"],
            "createdOnDate": 1530302729000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1530359807000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530302973000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          },
          {
            "number": 4,
            "revision": "d113e63c987519b0008aede3d1b7917e0ac9a227",
            "parents": [
              "5fbc7e5d91972c465b940e1ce0aa1e25d6b66e5e"
            ],
            "ref": "refs/changes/05/10705/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1530398819000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1531245097000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1531238824000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530399062000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/gerrit-fetch-dependencies.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "On modern Linux we don\u0027t need to use egrep.\n\nhttps://unix.stackexchange.com/questions/17949/what-is-the-difference-between-grep-egrep-and-fgrep\n\nI think this should just be `grep -E` instead.",
                "patchSetTimestamp": 1530398819000
              },
              {
                "file": "shell/gerrit-fetch-dependencies.sh",
                "line": 28,
                "reviewer": ids["zxiiro"],
                "message": "I thin",
                "patchSetTimestamp": 1530398819000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          },
          {
            "number": 5,
            "revision": "280b57b4c2980930b6145d42d75feae7b353583b",
            "parents": [
              "dfb2c6ca52a4c885e42d6c2252706bd824c75068"
            ],
            "ref": "refs/changes/05/10705/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1531245173000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1531245554000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1531245526000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          },
          {
            "number": 6,
            "revision": "a97f48ea67f1bd469d25ae816d7ba66786ecd68a",
            "parents": [
              "8f930852bc197279a3904c59dc315928d269c7bb"
            ],
            "ref": "refs/changes/05/10705/6",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1531325687000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1531495845000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1531495847000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1531334147000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1531325915000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-ci-jobs.yaml",
          "line": 615,
          "reviewer": ids["askb"],
          "message": "The verify jobs would be triggered resulting from the following comments:\n\n1. reverify\n2. recheck\n3. a comment line ending with reverify\n4. a comment line ending with recheck \n\nActual gerrit comment would look like:\n\n1. Patch Set 14: recheck\n2. Patch Set 15: reverify\n3. Patch Set 25: a comment line ending with reverify\n4. Patch Set 45: a comment line ending with recheck\n\nI tested the regex which handled all the about cases while it matches only for tests 1. and 2. So that only correct commands would retrigger the jobs.  \n\n^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify)$",
          "patchSetTimestamp": 1526587776000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I0da9d6bb99a5a0a9666697b27416fa5e5518e316",
        "commitNumber": 12558,
        "subject": "Fix package list script to not fail on diff",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12558",
        "commitMessage": "Fix package list script to not fail on diff\n\nThe diff command exits 1 if there is a difference between 2 files.\nThis is perfectly valid so ignore the exit code for this command.\n\nChange-Id: I0da9d6bb99a5a0a9666697b27416fa5e5518e316\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1536774646000,
        "lastUpdatedDate": 1536775978000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["agrimberg"],
          ids["zxiiro"],
          ids["askb"],
          ids["jeremyphelps"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1536774646000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1536774712000,
            "reviewer": ids["zxiiro"],
            "message": "Assignee added: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e"
          },
          {
            "timestamp": 1536774740000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 1: Code-Review+2"
          },
          {
            "timestamp": 1536774949000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/755/"
          },
          {
            "timestamp": 1536775115000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/755/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/755"
          },
          {
            "timestamp": 1536775127000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
          },
          {
            "timestamp": 1536775477000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1536775759000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1536775978000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1: Code-Review+2"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "2b3cda5089750601fada2c62cf8d2f5d8050f513",
            "parents": [
              "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
            ],
            "ref": "refs/changes/58/12558/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536774646000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1536775127000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1536775978000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1536774740000,
                "grantedBy": ids["jeremyphelps"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1536775115000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/package-listing.sh",
                "line": 53,
                "reviewer": ids["askb"],
                "message": "Does start and end packages guarantee sorted order? if not you should be sort both before passing it to diff.",
                "patchSetTimestamp": 1536774646000
              },
              {
                "file": "shell/package-listing.sh",
                "line": 53,
                "reviewer": ids["agrimberg"],
                "message": "It\u0027s guaranteed on RPM systems, dpkg (in all my testing) always listed things sorted so it\u0027s not passed to sort.\n\nSee lines 36 - 48. IIRC this script is called twice. Once at the start of the job, and once at the end. It\u0027s designed to be safely used that way.",
                "patchSetTimestamp": 1536774646000
              }
            ],
            "sizeInsertions": 7,
            "sizeDeletions": -1
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/package-listing.sh",
          "line": 53,
          "reviewer": ids["askb"],
          "message": "Does start and end packages guarantee sorted order? if not you should be sort both before passing it to diff.",
          "patchSetTimestamp": 1536774646000
        }
      ]
    }
  ],
  "commentsReceived": [],
  "reviewersForOwnCommits": [],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["agardner"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        },
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 0
    }
  },
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["agardner"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        },
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 0
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};