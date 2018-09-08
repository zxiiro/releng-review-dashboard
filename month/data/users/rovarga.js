userdata['rovarga'] = {
  "identity": ids["rovarga"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 9223372036854775807,
  "lastActiveDate": 0,
  "activeDayCount": 0,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0628cb5c7185e2143e448ceb4fa4752384581a5e",
      "commitNumber": 12318,
      "subject": "Add option to stage to Maven Central",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12318",
      "commitMessage": "Add option to stage to Maven Central\n\nProvide an option to also stage to OSSRH in preparation to release\nto Maven Central.\n\nIn addition to printing the staging repo-id also print the URL to\nthe staging repo for convenience in stage-repo.txt.\n\nNOTE: This patch introduces a breaking change to\n      lf-infra-maven-parameters to introduce a new boolean parameter\n      mvn-central. Job templates using this macro will need to add\n      \u0027mvn-central: false\u0027 to their list of passed parameters.\n\nIssue: https://jira.opendaylight.org/browse/RELENG-28\nChange-Id: I0628cb5c7185e2143e448ceb4fa4752384581a5e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534611026000,
      "lastUpdatedDate": 1534872533000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"],
        ids["rovarga"],
        ids["vorburger"],
        ids["zxiiro"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1534611026000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534611095000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/"
        },
        {
          "timestamp": 1534611230000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/716"
        },
        {
          "timestamp": 1534611403000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534611505000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/717/"
        },
        {
          "timestamp": 1534611661000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/717/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/717"
        },
        {
          "timestamp": 1534611835000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1534612068000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/718/"
        },
        {
          "timestamp": 1534612216000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/718/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/718"
        },
        {
          "timestamp": 1534613078000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Commit message was updated."
        },
        {
          "timestamp": 1534613134000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1534613157000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/719/"
        },
        {
          "timestamp": 1534613322000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/719/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/719"
        },
        {
          "timestamp": 1534614761000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1534614857000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review-2\n\nMy comments above should be addressed but additionally it looks like OSSRH will fail your staging repo if you are missing:\n\n1. source.jars\n2. javadoc.jars\n3. gpg signatures\n\nItem\u0027s 1 \u0026 2 are good for. Item 3 we need to get Sigul in place to automate this process."
        },
        {
          "timestamp": 1534614965000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/720/"
        },
        {
          "timestamp": 1534615136000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/720/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/720"
        },
        {
          "timestamp": 1534620082000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 5: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1534872533000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "1d428aba011436628e4542b483a6f97250f23cb1",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611026000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534611230000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 21,
          "sizeDeletions": -6
        },
        {
          "number": 2,
          "revision": "58f08491b03a624c9be6a84096c5b23f4d17409d",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611403000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534611661000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 23,
          "sizeDeletions": -6
        },
        {
          "number": 3,
          "revision": "03b3e986b9b8bb0636d747f3bb2fc538f48e3a97",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611835000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534612216000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 30,
          "sizeDeletions": -7
        },
        {
          "number": 4,
          "revision": "8ba8da20fa5e7714cebded68f2082038b478a6ae",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534613078000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534613134000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534613322000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 18,
              "reviewer": ids["zxiiro"],
              "message": "Maybe instead of forcing this on everyone. We should make it apply only to the staging job.",
              "patchSetTimestamp": 1534613078000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 134,
              "reviewer": ids["zxiiro"],
              "message": "need to make sure we document this in the RST files.",
              "patchSetTimestamp": 1534613078000
            }
          ],
          "sizeInsertions": 30,
          "sizeDeletions": -7
        },
        {
          "number": 5,
          "revision": "408fc151bf74ae36e1610e3b7c20ad33898f49cb",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534614761000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534620082000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1534614857000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534615136000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/maven-stage.sh",
              "line": 37,
              "reviewer": ids["agrimberg"],
              "message": "This is hard coding a Maven Central Nexus staging ID. I would expect that we should be ending up with a different ID per project that we setup for Maven Central push",
              "patchSetTimestamp": 1534614761000
            },
            {
              "file": "shell/maven-stage.sh",
              "line": 37,
              "reviewer": ids["zxiiro"],
              "message": "Yep this is the generic Profile ID that every OSSRH account get\u0027s access to. I was waiting for confirmation from the admins to see if we get our own special Profile ID or not.\n\nThe answer is yes we do so we\u0027ll need to make this configurable.",
              "patchSetTimestamp": 1534614761000
            },
            {
              "file": "shell/maven-stage.sh",
              "line": 41,
              "reviewer": ids["agrimberg"],
              "message": "This is the same as lines 25 - 32 just with some different parameters. as such, I think that lines 25 - 32 should be functionalized and then called with the needed parameters.",
              "patchSetTimestamp": 1534614761000
            }
          ],
          "sizeInsertions": 36,
          "sizeDeletions": -8
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0dd4342664251386ddc7eca52df56156105f200d",
      "commitNumber": 9927,
      "subject": "Rename maven-release job to maven-stage",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9927",
      "commitMessage": "Rename maven-release job to maven-stage\n\nATTENTION: This is a breaking change. The trigger word\n\"build release$\" is changed to \"stage-release$\" to better\nreflect what this job is actually doing.\n\nIn preparation for work on RELENG-425 this change renames the\nmaven-release jobs to maven-stage job to better reflect what the\njob really does.\n\nTrigger keyword was also changed to \"stage-release$\"\n\nIssue: RELENG-425\nChange-Id: I0dd4342664251386ddc7eca52df56156105f200d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1523479918000,
      "lastUpdatedDate": 1533858637000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["askb"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["rovarga"],
        ids["agrimberg"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1523479918000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1523479959000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to RELENG-425"
        },
        {
          "timestamp": 1523481016000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1523857395000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1524189687000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1524189746000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1:\n\nMy documentation comment is more optional if you guys agree.. but just the correction in lf-maven-jobs needs to be done."
        },
        {
          "timestamp": 1524239560000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1524243249000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1524665329000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1524665342000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1525290278000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533220941000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2:\n\n\u003e (2 comments)\n\nAre we still planning on this?  I think it\u0027s a good idea."
        },
        {
          "timestamp": 1533222674000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nYep. I was holding this off for a valid release job but maybe we should just go ahead and release this. I\u0027ll rebase this and resubmit."
        },
        {
          "timestamp": 1533222763000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1533222832000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3: Code-Review+1\n\nOthers to review since it is a breaking change."
        },
        {
          "timestamp": 1533222898000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/292/ (1/2)"
        },
        {
          "timestamp": 1533222953000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/686/ (2/2)"
        },
        {
          "timestamp": 1533223027000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+1\n\nI\u0027m fine with this. The only reason we don\u0027t need to go bumping the major for global-jjb is due to us not having actually released a 1.x series yet!\n\nI\u0027m thinking we probably should do so in the not so distant future"
        },
        {
          "timestamp": 1533223120000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/292/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/292\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/686/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/686"
        },
        {
          "timestamp": 1533519608000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1533851915000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1533851933000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nI\u0027d like to land this for the next global-jjb release."
        },
        {
          "timestamp": 1533858619000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3: Code-Review+2\n\nJust need to be sure to include this is a breaking change."
        },
        {
          "timestamp": 1533858637000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a690e8897a20db81b31341e74b6ccea3e0be6a75",
          "parents": [
            "42bccf5db0da3fd0b900a3c508988d992b1fecc2"
          ],
          "ref": "refs/changes/27/9927/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523479918000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523857395000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524189687000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523481016000,
              "grantedBy": ids["jeremyphelps"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-maven-jobs.rst",
              "line": 264,
              "reviewer": ids["jwagantall"],
              "message": "Can we add to this documentation that the repo created has the format \"autorelase-####\"? Just to be more specific.",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "docs/jjb/lf-maven-jobs.rst",
              "line": 264,
              "reviewer": ids["zxiiro"],
              "message": "In odl every project has a different repo name.\n\nautorelease-#### is for the autorelease project.\nodlparent-#### is for the odlparent project.\nyangtools-#### is for the yangtools project.\n\netc...\n\nI can add details that it will be in the format [a-z]+-[0-9][0-9][0-9][0-9].",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "docs/jjb/lf-maven-jobs.rst",
              "line": 264,
              "reviewer": ids["jwagantall"],
              "message": "Oh, I didn\u0027t realized that was the case for different projects. Yes please.. let\u0027s add the expected format",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "docs/jjb/lf-maven-jobs.rst",
              "line": 264,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 682,
              "reviewer": ids["jwagantall"],
              "message": "lf_maven_stage",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 682,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1523479918000
            }
          ],
          "sizeInsertions": 22,
          "sizeDeletions": -22
        },
        {
          "number": 2,
          "revision": "4e1a2815be2952983293f6867e5231eed91e463c",
          "parents": [
            "bfe91be03d516a56adb74abd1e16c50b86c27c6e"
          ],
          "ref": "refs/changes/27/9927/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1524665342000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525290278000,
              "grantedBy": ids["jwagantall"]
            }
          ],
          "comments": [],
          "sizeInsertions": 28,
          "sizeDeletions": -25
        },
        {
          "number": 3,
          "revision": "32363c61de3ae1fa4bf31fe17327bc153da3e897",
          "parents": [
            "356637f0d3d4091aecde9889c1bc9ec758a33336"
          ],
          "ref": "refs/changes/27/9927/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533222763000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1533223027000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533851915000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1533519608000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533858619000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533858637000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533223120000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 28,
          "sizeDeletions": -25
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [],
  "reviewersForOwnCommits": [],
  "repositories": {},
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};